module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }], // 자동으로 import React from "react"를 적용시키기
  ],
}
