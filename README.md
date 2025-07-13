# 🔐 jitbr

jitbr is a lightweight password hashing and comparison library using Node.js `crypto`. Works similarly to `bcrypt` but with native support and zero dependencies.



## 📦 Installation


npm install jitbr


## Usage

import { hash, compare, genSalt, hashWithSalt } from 'jitbr';

// Simple hash (default salt)

const hashed = hash("mypassword");
compare("mypassword", hashed); // true

// With random salt

const { salt, hashed: saltedHash } = hashWithSalt("mypassword");
compare("mypassword", saltedHash, salt); // true