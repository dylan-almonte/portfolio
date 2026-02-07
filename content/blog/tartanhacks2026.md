---
title: "Nudge Pay: Building an All-in-One Command Center for Digital Finances"
date: "2025-01-25"
description: "A look into Nudge Pay—a unified system to track, monitor, and budget online spending in real-time."
tags: ["hackathon", "fintech", "javascript", "tartanhacks"]
---

## Welcome to Nudge Pay

I recently participated in **TartanHacks**, where my team and I built **Nudge Pay** [1]. Managing online spending is currently a fragmented experience; data is scattered across various retailers, manual tracking is tedious, and most budgeting tools only provide feedback *after* the money has already been spent [2, 3]. 

We set out to create a unified financial ecosystem that bridges the gap between your bank and your browser.

### How it works

Nudge Pay isn't just a single tool; it’s a coordinated system built primarily with **JavaScript (72.9%)**, **CSS (14.5%)**, and **HTML (12.6%)** [4]. The project, featuring contributions from **dylan-almonte**, is structured into three core components found in our repository: a browser **extension**, a central **website**, and a backend foundation centered around a **shared schema** [5, 6].

Here is the breakdown of the "all-in-one" approach:

*   **Real-Time Data Normalization:** Instead of messy manual logs, we assume a direct connection to your bank. We use a **`SHARED_SCHEMA.md`** to normalize diverse data feeds from different financial institutions, ensuring all spending information is consistent and easy to categorize in one place [6, 7].
*   **The Browser Extension:** This is the frontline of the system. It monitors shopping activity in real-time, providing proactive "nudges" at the point of purchase to keep you within your budget before you click "buy" [6, 8, 9].
*   **The Website Dashboard:** While the extension handles the immediate interaction, the **website** component provides the "big picture" [3, 6]. It serves as a visual hub for analytics, giving you total transparency over your financial health.

### What's next

While we've made great progress during the hackathon, there is a lot more on the horizon [10]:

*   **Live Banking API Integration:** Moving from assumed connections to production-ready APIs like Plaid to securely sync real-time transaction data.
*   **Predictive AI "Smart Nudges":** Utilizing machine learning to analyze spending patterns and provide warnings before a user even reaches a checkout page.
*   **Mobile Ecosystem Expansion:** Expanding the "all-in-one" vision beyond the desktop to a dedicated mobile app for spending accountability on the go.

Stay tuned for more updates as we continue to evolve Nudge Pay!
I have organized this markdown file based on the technical details in your repository and the structure of your presentation slides. Would you like me to create a tailored report artifact that expands on the technical implementation of your shared schema for the "What's next" section of your blog?
