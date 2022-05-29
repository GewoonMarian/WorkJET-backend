"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("skills", [
      { name: "AMPL", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sather", createdAt: new Date(), updatedAt: new Date() },
      { name: "AMOS BASIC", createdAt: new Date(), updatedAt: new Date() },
      { name: "Object Oberon", createdAt: new Date(), updatedAt: new Date() },
      { name: "J", createdAt: new Date(), updatedAt: new Date() },
      { name: "Haskell", createdAt: new Date(), updatedAt: new Date() },
      { name: "EuLisp", createdAt: new Date(), updatedAt: new Date() },
      { name: "Z Shell (zsh)", createdAt: new Date(), updatedAt: new Date() },
      { name: "GNU E", createdAt: new Date(), updatedAt: new Date() },
      { name: "Oberon-2", createdAt: new Date(), updatedAt: new Date() },
      { name: "Oz", createdAt: new Date(), updatedAt: new Date() },
      { name: "Q", createdAt: new Date(), updatedAt: new Date() },
      { name: "Python", createdAt: new Date(), updatedAt: new Date() },
      { name: "Visual Basic", createdAt: new Date(), updatedAt: new Date() },
      { name: "Borland Pascal", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dylan", createdAt: new Date(), updatedAt: new Date() },
      { name: "S-Lang", createdAt: new Date(), updatedAt: new Date() },
      { name: "Self ", createdAt: new Date(), updatedAt: new Date() },
      { name: "Amiga E", createdAt: new Date(), updatedAt: new Date() },
      { name: "Brainfuck", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "LiveCode Transcript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "AppleScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "K", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lua", createdAt: new Date(), updatedAt: new Date() },
      { name: "R", createdAt: new Date(), updatedAt: new Date() },
      { name: "ZPL", createdAt: new Date(), updatedAt: new Date() },
      { name: "NewtonScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "Euphoria", createdAt: new Date(), updatedAt: new Date() },
      { name: "Claire", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "ANSI Common Lisp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "RAPID", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pike", createdAt: new Date(), updatedAt: new Date() },
      { name: "ANS Forth", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ada 95", createdAt: new Date(), updatedAt: new Date() },
      { name: "Borland Delphi", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "ColdFusion (CFML)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Java", createdAt: new Date(), updatedAt: new Date() },
      { name: "LiveScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mercury", createdAt: new Date(), updatedAt: new Date() },
      { name: "PHP", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ruby", createdAt: new Date(), updatedAt: new Date() },
      { name: "JavaScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "Racket", createdAt: new Date(), updatedAt: new Date() },
      { name: "Curl", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lasso", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Perl Data Language ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "VBScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "OCaml", createdAt: new Date(), updatedAt: new Date() },
      { name: "NetRexx", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Component Pascal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "E", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pico", createdAt: new Date(), updatedAt: new Date() },
      { name: "Squeak", createdAt: new Date(), updatedAt: new Date() },
      { name: "ECMAScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "F-Script", createdAt: new Date(), updatedAt: new Date() },
      { name: "ISLISP", createdAt: new Date(), updatedAt: new Date() },
      { name: "Tea", createdAt: new Date(), updatedAt: new Date() },
      { name: "REBOL", createdAt: new Date(), updatedAt: new Date() },
      { name: "Logtalk", createdAt: new Date(), updatedAt: new Date() },
      { name: "ActionScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "Standard C++", createdAt: new Date(), updatedAt: new Date() },
      { name: "M2001", createdAt: new Date(), updatedAt: new Date() },
      { name: "PureBasic", createdAt: new Date(), updatedAt: new Date() },
      { name: "UnrealScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "XSLT (+ XPath)", createdAt: new Date(), updatedAt: new Date() },
      { name: "Xojo", createdAt: new Date(), updatedAt: new Date() },
      { name: "C99", createdAt: new Date(), updatedAt: new Date() },
      { name: "Gambas", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Game Maker Language",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Harbour", createdAt: new Date(), updatedAt: new Date() },
      { name: "Join Java", createdAt: new Date(), updatedAt: new Date() },
      { name: "DarkBasic", createdAt: new Date(), updatedAt: new Date() },
      { name: "C#", createdAt: new Date(), updatedAt: new Date() },
      { name: "Joy", createdAt: new Date(), updatedAt: new Date() },
      { name: "AspectJ", createdAt: new Date(), updatedAt: new Date() },
      { name: "D", createdAt: new Date(), updatedAt: new Date() },
      { name: "Processing", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Visual Basic .NET",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "GDScript ", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Shakespeare Programming Language",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Io", createdAt: new Date(), updatedAt: new Date() },
      { name: "Gosu", createdAt: new Date(), updatedAt: new Date() },
      { name: "Scratch", createdAt: new Date(), updatedAt: new Date() },
      { name: "Nemerle", createdAt: new Date(), updatedAt: new Date() },
      { name: "Factor", createdAt: new Date(), updatedAt: new Date() },
      { name: "Scala", createdAt: new Date(), updatedAt: new Date() },
      { name: "C++03", createdAt: new Date(), updatedAt: new Date() },
      { name: "Squirrel", createdAt: new Date(), updatedAt: new Date() },
      { name: "Boo", createdAt: new Date(), updatedAt: new Date() },
      { name: "Subtext", createdAt: new Date(), updatedAt: new Date() },
      { name: "Alma-0", createdAt: new Date(), updatedAt: new Date() },
      { name: "FreeBASIC", createdAt: new Date(), updatedAt: new Date() },
      { name: "Groovy", createdAt: new Date(), updatedAt: new Date() },
      { name: "Little b", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fantom", createdAt: new Date(), updatedAt: new Date() },
      { name: "F#", createdAt: new Date(), updatedAt: new Date() },
      { name: "Haxe", createdAt: new Date(), updatedAt: new Date() },
      { name: "Oxygene", createdAt: new Date(), updatedAt: new Date() },
      { name: "PWCT", createdAt: new Date(), updatedAt: new Date() },
      { name: "Seed7", createdAt: new Date(), updatedAt: new Date() },
      { name: "Cobra", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Windows PowerShell",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "OptimJ", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fortress", createdAt: new Date(), updatedAt: new Date() },
      { name: "Vala", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ada 2005", createdAt: new Date(), updatedAt: new Date() },
      { name: "Agda", createdAt: new Date(), updatedAt: new Date() },
      { name: "QB64", createdAt: new Date(), updatedAt: new Date() },
      { name: "Clojure", createdAt: new Date(), updatedAt: new Date() },
      { name: "LOLCODE", createdAt: new Date(), updatedAt: new Date() },
      { name: "Oberon-07", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Swift (parallel scripting language)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Nim", createdAt: new Date(), updatedAt: new Date() },
      { name: "Genie", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pure", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chapel", createdAt: new Date(), updatedAt: new Date() },
      { name: "Go", createdAt: new Date(), updatedAt: new Date() },
      { name: "CoffeeScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "Idris", createdAt: new Date(), updatedAt: new Date() },
      { name: "Parasail", createdAt: new Date(), updatedAt: new Date() },
      { name: "Whiley", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dafny", createdAt: new Date(), updatedAt: new Date() },
      { name: "Rust", createdAt: new Date(), updatedAt: new Date() },
      { name: "C11", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ceylon", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dart", createdAt: new Date(), updatedAt: new Date() },
      { name: "C++11", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kotlin", createdAt: new Date(), updatedAt: new Date() },
      { name: "Red", createdAt: new Date(), updatedAt: new Date() },
      { name: "Opa", createdAt: new Date(), updatedAt: new Date() },
      { name: "Elixir", createdAt: new Date(), updatedAt: new Date() },
      { name: "Elm", createdAt: new Date(), updatedAt: new Date() },
      { name: "TypeScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "Julia", createdAt: new Date(), updatedAt: new Date() },
      { name: "P", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ada 2012", createdAt: new Date(), updatedAt: new Date() },
      { name: "P4", createdAt: new Date(), updatedAt: new Date() },
      { name: "PureScript", createdAt: new Date(), updatedAt: new Date() },
      { name: "Hopscotch", createdAt: new Date(), updatedAt: new Date() },
      { name: "Cuneiform", createdAt: new Date(), updatedAt: new Date() },
      { name: "Crystal", createdAt: new Date(), updatedAt: new Date() },
      { name: "Hack", createdAt: new Date(), updatedAt: new Date() },
      { name: "Swift", createdAt: new Date(), updatedAt: new Date() },
      { name: "C++14", createdAt: new Date(), updatedAt: new Date() },
      { name: "Raku", createdAt: new Date(), updatedAt: new Date() },
      { name: "Zig", createdAt: new Date(), updatedAt: new Date() },
      { name: "Reason", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ring", createdAt: new Date(), updatedAt: new Date() },
      { name: "C++17", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ballerina", createdAt: new Date(), updatedAt: new Date() },
      { name: "Q#", createdAt: new Date(), updatedAt: new Date() },
      { name: "C17", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fortran 2018", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bosque", createdAt: new Date(), updatedAt: new Date() },
      { name: "C++20", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Microsoft Power Fx",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Express", createdAt: new Date(), updatedAt: new Date() },
      { name: "Django", createdAt: new Date(), updatedAt: new Date() },
      { name: "Rails", createdAt: new Date(), updatedAt: new Date() },
      { name: "Laravel", createdAt: new Date(), updatedAt: new Date() },
      { name: "Spring", createdAt: new Date(), updatedAt: new Date() },
      { name: "Angular", createdAt: new Date(), updatedAt: new Date() },
      { name: "React", createdAt: new Date(), updatedAt: new Date() },
      { name: "Vue", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ember", createdAt: new Date(), updatedAt: new Date() },
      { name: "Backbone", createdAt: new Date(), updatedAt: new Date() },
      { name: "CSS", createdAt: new Date(), updatedAt: new Date() },
      { name: "HTML5", createdAt: new Date(), updatedAt: new Date() },
      { name: "SQL", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sequelize", createdAt: new Date(), updatedAt: new Date() },
      { name: "Redux", createdAt: new Date(), updatedAt: new Date() },
      { name: "React Native", createdAt: new Date(), updatedAt: new Date() },
    ]),
      [];
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("skills", null, {});
  },
};
