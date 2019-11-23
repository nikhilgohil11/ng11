---
path: "/2017/06/16/nativescript-project-doesnt-work-after-switching-git-branch/"
category: "NativeScript"
tags: ["tns","nativescript","NativeScript"]
title: "NativeScript project doesn’t work after switching git branch"
date: "2017-06-16T00:00:00.000Z"
summary: "Telerik NativeScript tns CLI generates iOS and android project in platform/ios and platform/android folders respectively. If we switch between Git branches it may stop working..."
images: ["images/post2/post2.png"]
---

Telerik NativeScript tns CLI generates iOS and android project in platform/ios and platform/android folders respectively. If we switch between Git branches it may stop working

In this case you can remove existing platforms by following command

<b>tns platform remove iOS</b> and/or <b>tns platform remove android</b>

Now to make work properly you can either add your need platform by

<b>tns platform remove iOS</b> or

<b>tns platform add android</b>

or you can add Both the platforms by

<b>tns install</b>

Now you can run project by

<b>tns run ios</b> or <b>tns run android</b>
