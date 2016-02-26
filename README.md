# TUI Ostend Broodjes App

The TUI Ostend Broodjes App enables TUI employees to order broodjes from a single spot, delivered by the best Broodjes artisans in Ostend.

## Install

The Broodjesapp runs on the experimental Ionic Beta2. Some broodjes might get burned in the process.
Ionic is the most praised and community backed Cordova-layer framework, hooked with Angular.

You'll be needing some tools in your toolbelt.

##### Homebrew (mac)
If you are a Mac user and do the act of developing, you almost certainly have brew installed. By the off chance that you don't, run this command in Terminal:

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

##### Github
For Hackfridays, our git service of choice is Github. They have a [desktop app](https://desktop.github.com/).

##### Node
You'll be needing npm (*node package manager*) to install Ionic. Luckily we have brew to help us out

`brew install node`

Surf to [blog.cloudoki.com/set-up-your-local-battleground](http://blog.cloudoki.com/set-up-your-local-battleground/) for more info on your basic local environment tools.

##### Ionic
Let's proceed with the Ionic beta install (sudo might be required). Keep in mind this is the experimental version.

`npm install -g ionic@beta`

We will also be needing Cordova, to run the app on a actual mobile device.

`sudo npm install -g cordova`


## How we built it

First we started with the most basic of terminal lines.

`ionic start tui-broodjesap --v2`

Since we don't want to needlessly over-size our repository, a `.gitignore` with following content will do the trick: `nodes_modules`