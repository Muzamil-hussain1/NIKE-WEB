module.exports={
  testEnvironment: "jsdom",   // ✅ Browser-like environment
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"  // ✅ JSX aur modern JS handle kare
  },
  moduleFileExtensions: ["js", "jsx"], // ✅ React files ko recognize kare
};