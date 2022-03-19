#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  figlet(`AZ Cloud`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
    chalkAnimation.rainbow("https://cloud.azsoftware.org\n");
  });
 
  await sleep();

  process.exit(0);
}

await welcome();
