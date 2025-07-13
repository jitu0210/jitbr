import crypto from "crypto";

export function genSalt(length = 16) {
  return crypto.randomBytes(length).toString("hex");
}

export function hash(password, salt = "jitbr_salt") {
  return crypto.createHmac("sha256", salt).update(password).digest("hex");
}

export function hashWithSalt(password) {
  const salt = genSalt();
  const hashed = hash(password, salt);
  return { salt, hashed };
}

export function compare(password, hashed, salt = "jitbr_salt") {
  return hash(password, salt) === hashed;
}