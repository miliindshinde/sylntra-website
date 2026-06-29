# CLAUDE.md

> **Project:** Sylntra Website
>
> **Version:** 1.0
>
> This document is the permanent operating manual for the Sylntra website project.
>
> Claude Code must read and follow these instructions before making any modifications.
>
> If any user instruction conflicts with this document, ask for clarification before proceeding.

---

# 1. Project Vision

Sylntra is not a web design agency.

Sylntra is a business systems studio.

We help businesses become more efficient by designing intelligent digital systems that reduce manual work, improve customer experience, and support sustainable growth.

We do not sell technology.

We solve business problems.

Technology is only the implementation layer.

Every design decision, every line of code, and every piece of copy should reinforce this philosophy.

---

# 2. Project Objectives

The website exists to:

* Build trust.
* Demonstrate expertise.
* Educate potential clients.
* Generate qualified consultation requests.
* Position Sylntra as a premium systems partner.

The website is not a portfolio.

The website is not a template showcase.

The website should communicate business transformation rather than technical capability.

---

# 3. Target Audience

Primary audience:

* Small business owners
* Professional service businesses
* Agencies
* Consultants
* Entrepreneurs

The audience is not highly technical.

They care about:

* Saving time
* Increasing revenue
* Eliminating repetitive work
* Improving customer experience
* Looking more professional
* Building scalable systems

Avoid technical jargon unless absolutely necessary.

Focus on business outcomes.

---

# 4. Brand Principles

Every page should feel:

* Premium
* Modern
* Calm
* Confident
* Intelligent
* Trustworthy
* Human
* Founder-led

Never feel:

* Corporate
* Salesy
* Overly technical
* Buzzword-heavy
* Generic AI agency

---

# 5. Core Philosophy

Always remember:

Better systems.
Not more software.

Every improvement should support this positioning.


# 6. Engineering Principles & Decision Framework

These principles govern every design, development, UX, copywriting, and architectural decision made throughout this project.

Claude Code must follow these principles before implementing any solution.

If multiple solutions are technically valid, choose the one that best aligns with these principles.

---

## Principle 1 — Business Value First

Every change must create measurable business value.

The website exists to help businesses trust Sylntra and book a consultation.

Technology is never the goal.

Technology is only the tool.

When evaluating a solution, always ask:

"Does this help the visitor better understand Sylntra or become more likely to contact us?"

If the answer is no, reconsider the solution.

---

## Principle 2 — User Experience Before Technology

Never sacrifice clarity for technical sophistication.

Visitors should immediately understand:

• What Sylntra does

• Why it matters

• Why they should trust us

• What they should do next

If an animation, interaction, or feature reduces clarity, simplify it.

---

## Principle 3 — Simplicity Wins

Prefer the simplest solution that fully solves the problem.

Avoid unnecessary:

• components

• animations

• dependencies

• JavaScript

• visual complexity

Premium experiences come from thoughtful design—not excessive effects.

---

## Principle 4 — Incremental Development

Never perform large-scale rewrites.

Every task should be:

• focused

• reviewable

• reversible

Implement one improvement at a time.

After every completed task:

• explain what changed

• explain why

• wait for approval before starting the next major task

---

## Principle 5 — Preserve Existing Quality

Never replace high-quality work simply because another implementation is possible.

Prefer improving existing components over rebuilding them.

Reuse before replacing.

Extend before rewriting.

---

## Principle 6 — Consistency Over Creativity

Creative ideas are encouraged.

However:

Consistency across the website is more important than individual visual experiments.

Every page should feel like part of the same product.

Typography, spacing, motion, components and visual rhythm should remain cohesive.

---

## Principle 7 — Accessibility Is Mandatory

Accessibility is not optional.

Every implementation must support:

• semantic HTML

• keyboard navigation

• readable contrast

• proper heading hierarchy

• meaningful labels

Accessibility improvements should never be postponed.

---

## Principle 8 — Performance Is A Feature

Fast websites create trust.

Before introducing any dependency, animation or library, ask:

"Can the same outcome be achieved more simply?"

Avoid unnecessary JavaScript.

Prefer CSS where appropriate.

Optimize images.

Keep bundle size small.

---

## Principle 9 — Design Supports Conversion

Visual beauty is important.

Business outcomes are more important.

Every section should guide visitors toward:

• understanding

• trust

• action

Never add decorative sections that do not improve the visitor journey.

---

## Principle 10 — Respect the Design System

The design system is the single source of truth.

Do not introduce:

• new colors

• new spacing scales

• new typography

• new border radii

• inconsistent shadows

without explicit approval.

---

# Decision Hierarchy

When multiple solutions exist, prioritize them in this order:

1. Business Goals

2. User Experience

3. Accessibility

4. Performance

5. Maintainability

6. Consistency

7. Visual Polish

8. Code Elegance

When uncertain, always choose the higher priority.

---

# Definition of Success

A successful implementation is one that:

✓ improves the visitor experience

✓ strengthens the Sylntra brand

✓ increases trust

✓ encourages conversion

✓ preserves maintainability

✓ keeps the project easy to extend

Success is not measured by the amount of code written.

Success is measured by the value delivered.


# 7. Claude Operating Rules

These rules define how Claude Code should collaborate on this project.

Follow them for every session unless explicitly instructed otherwise.

---

## Read Before Acting

Before making any code changes:

1. Read this CLAUDE.md file.
2. Understand the current request.
3. Identify affected files.
4. Create an implementation plan.
5. Present the plan.
6. Wait for approval before making significant changes.

Never immediately start editing code.

---

## Work In Small Milestones

Never attempt large refactors unless explicitly requested.

Prefer:

One page

One section

One component

One improvement

per task.

Every milestone should leave the project in a working state.

---

## Modify Only What Is Requested

Only edit files directly related to the current task.

Do not:

* reorganize unrelated folders
* rename files unnecessarily
* modify global styles without approval
* redesign unrelated sections

Stay focused.

---

## Explain Before Editing

Before implementing changes, briefly explain:

* what will change
* why it is needed
* which files will be affected
* possible risks (if any)

Keep explanations concise.

---

## Reuse Before Creating

Before creating:

* components
* utilities
* styles
* helpers

first search the project.

If a reusable solution already exists:

Reuse it.

Do not duplicate functionality.

---

## Preserve Existing Work

Assume existing code was written intentionally.

Improve it.

Do not replace it unless there is a clear technical reason.

---

## Never Surprise The User

Avoid making additional "nice improvements."

Only implement:

* approved improvements
* requested improvements

Suggestions are welcome.

Unexpected modifications are not.

---

## Ask When Uncertain

If requirements are ambiguous:

Stop.

Ask.

Never guess.

---

## Maintain Project Stability

Every completed task must leave the project:

✓ buildable

✓ responsive

✓ accessible

✓ visually consistent

✓ production-ready

Never leave partially implemented features.

---

## Explain After Completion

After every implementation provide:

1. Summary

2. Files modified

3. Why the solution was chosen

4. Anything the user should test

Avoid long explanations.

Keep responses concise.

---

## Preserve Git History

Encourage meaningful commits.

One logical change should equal one commit.

Example:

✓ Improve Hero Typography

✓ Add Founder Portrait

✓ Refine CTA Buttons

Avoid combining unrelated work into one commit.

---

## Respect Human Decisions

The user always has final approval.

If a proposed improvement conflicts with user preference:

Implement the user's decision.

Do not repeatedly recommend alternatives after a decision has been made.

---

## Long-Term Thinking

Optimize for:

Maintainability

Consistency

Scalability

Readability

Future contributors

Never optimize only for the current task.

Think about the project one year from now.


# 8. Token Optimization Rules

Claude Code should optimize every interaction for minimal token usage while maintaining high implementation quality.

The objective is to reduce unnecessary reading, writing and repetition.

---

## Rule 1 — Read Only What Is Necessary

Never scan the entire project if the task only affects one section.

Identify the minimum required files.

Example:

Changing the Hero section should not require reading the Blog page.

---

## Rule 2 — Make Surgical Changes

Prefer modifying existing code instead of rewriting entire files.

Only edit the smallest possible portion of code.

Avoid replacing large blocks when a few lines will solve the problem.

---

## Rule 3 — Never Rewrite Unchanged Code

When responding:

Only explain or output code that actually changed.

Do not reproduce large unchanged sections.

---

## Rule 4 — Reuse Existing Components

Before creating:

* components
* utilities
* CSS classes
* helper functions

always search the project first.

Reuse before creating.

---

## Rule 5 — Minimize File Creation

Do not create new files unless they provide clear long-term value.

Prefer extending existing architecture.

---

## Rule 6 — Avoid Duplicate Logic

Never duplicate functionality.

Extract shared logic when reuse is likely.

---

## Rule 7 — Keep Responses Concise

Default response style:

* Brief summary
* Files changed
* Why the change was made
* What should be tested

Avoid lengthy explanations unless requested.

---

## Rule 8 — Avoid Repeating Context

Never restate:

* Project Vision
* Brand Principles
* Development Philosophy
* Design Rules

They already exist in CLAUDE.md.

Assume they are understood.

---

## Rule 9 — Do Not Explain Obvious Code

Avoid explaining basic HTML, CSS, React or JavaScript unless the user asks for teaching.

Assume implementation is the priority.

---

## Rule 10 — One Task At A Time

Focus only on the requested milestone.

Do not anticipate future work.

Complete the current task before suggesting the next.

---

## Rule 11 — Preserve Context Window

When a task is completed:

Do not summarize the entire project.

Only summarize:

* current task
* affected files
* next recommended step

---

## Rule 12 — Prefer Existing Design System

Never recreate design tokens.

Reuse:

* spacing
* typography
* colors
* shadows
* animations

already available in the project.

---

## Rule 13 — Avoid Premature Refactoring

Only refactor when:

* duplication exists
* readability improves
* maintainability improves

Never refactor simply because code "could be cleaner."

---

## Rule 14 — Batch Similar Changes

If multiple requested edits affect the same component or file, implement them together in one logical change.

Avoid repeatedly editing the same file across many separate responses.

---

## Rule 15 — Ask Before Expensive Operations

Before performing:

* large refactors
* dependency changes
* folder restructuring
* architectural rewrites
* multi-page updates

present the plan and wait for approval.

---

## Response Format

Unless instructed otherwise, every implementation response should follow this format:

Summary

Files Modified

Reason

Testing Checklist

Next Recommended Step

Keep responses concise.

Code quality takes priority over explanation length.


# 9. Development & Coding Standards

These standards apply to all frontend development performed within this project.

The objective is to produce production-ready, maintainable, reusable code.

---

# General Philosophy

Code should be written for humans first and computers second.

Readable code is preferred over clever code.

Consistency is preferred over personal preference.

---

# File Modification Policy

Before creating a new file:

1. Check whether an existing file can be extended.

2. Avoid unnecessary file proliferation.

3. Prefer modifying existing architecture.

Only create new files when they improve long-term maintainability.

---

# Component Philosophy

Components should have one clear responsibility.

Avoid large components responsible for multiple concerns.

If a component becomes difficult to understand, consider splitting it.

---

# Reusability

Before creating:

• Component

• Utility

• Helper

• Style

Search the project.

Reuse existing implementations whenever possible.

Avoid duplication.

---

# Naming Conventions

Names should clearly describe intent.

Prefer:

HeroSection

ServicesGrid

ProcessTimeline

Avoid vague names such as:

Component1

TempCard

NewHero

TestSection

---

# Styling Standards

Always use the existing Design System.

Never introduce:

• arbitrary spacing

• random colors

• inconsistent typography

• hardcoded design values

Prefer design tokens whenever available.

---

# Layout Standards

Maintain consistent:

• spacing

• alignment

• visual rhythm

• responsive behavior

Every page should feel visually connected.

---

# Responsive Design

Every implementation must work across:

Desktop

Laptop

Tablet

Mobile

Never consider desktop implementation complete until responsiveness has been verified.

---

# Accessibility

Every component should support:

Semantic HTML

Keyboard navigation

Visible focus states

Accessible labels

Logical heading hierarchy

Accessibility is part of the implementation—not an afterthought.

---

# Performance

Before introducing additional code ask:

Can this be achieved with existing functionality?

Prefer:

CSS over JavaScript

Native browser APIs over dependencies

Reusable logic over duplication

Keep the project lightweight.

---

# Animations

Animations should enhance understanding.

Never distract users.

Preferred animation characteristics:

• subtle

• smooth

• purposeful

• fast

Avoid excessive movement.

---

# Copywriting

Copy should always:

Focus on business outcomes

Use simple language

Avoid buzzwords

Avoid technical jargon

Build trust

Encourage action

Write for business owners—not developers.

---

# Error Prevention

Before completing a task verify:

✓ No console errors

✓ No layout regressions

✓ Responsive layout maintained

✓ Existing functionality preserved

✓ Accessibility maintained

---

# Before Every Commit

Confirm:

✓ Project builds successfully

✓ Visual changes match the request

✓ No unrelated files modified

✓ Code remains readable

✓ Existing functionality preserved

Never commit broken code.


# 10. Git Workflow & Version Control

Version control is mandatory for this project.

Every meaningful change must be tracked.

---

## Commit Philosophy

One logical improvement = One commit.

Avoid combining unrelated work into a single commit.

Good examples:

✓ Replace Hero Placeholder Image

✓ Improve Hero CTA

✓ Optimize Mobile Navigation

✓ Improve Services Page Layout

Bad examples:

✗ Website Updates

✗ Fixed Stuff

✗ Changes

---

## Commit Frequency

Commit after completing every milestone.

Never wait until multiple unrelated improvements accumulate.

Small commits make rollback easier.

---

## Git Safety

Never recommend force pushing unless explicitly requested.

Never delete Git history.

Never rewrite commit history without approval.

Preserve a clean project timeline.

---

## Before Every Commit

Verify:

✓ No console errors

✓ No broken layouts

✓ No accessibility regressions

✓ Responsive behavior maintained

✓ Project still functions correctly

---

## Branching

For now, work directly on the main branch.

If future features become large or experimental, recommend feature branches before implementation.

---

## Commit Messages

Use clear, descriptive commit messages.

Format:

<Action> <Area>

Examples:

Improve Hero Typography

Add Founder Portrait

Refine CTA Buttons

Optimize Mobile Menu

Avoid vague commit messages.

---

## Push Strategy

After every approved milestone:

Commit

Push to GitHub

Confirm the repository is synchronized.

The GitHub repository should always represent the latest approved version of the project.


# 11. Definition of Done (DoD)

No task is considered complete until every applicable item in this checklist has been verified.

Completion means more than "the code works."

It means the implementation meets Sylntra's engineering, UX, accessibility, and business standards.

---

## Functional

✓ The requested feature has been implemented.

✓ Existing functionality continues to work.

✓ No regressions introduced.

✓ No console errors.

✓ No runtime errors.

---

## User Experience

✓ The implementation improves the user experience.

✓ Navigation remains intuitive.

✓ Visual hierarchy is preserved.

✓ The page remains easy to scan.

✓ Business value has increased.

---

## Design

✓ Design System followed.

✓ Typography consistent.

✓ Spacing consistent.

✓ Components consistent.

✓ Animations remain subtle.

✓ Visual rhythm preserved.

---

## Responsive Design

Verified on:

✓ Desktop

✓ Laptop

✓ Tablet

✓ Mobile

No overflow.

No broken layouts.

No unusable touch targets.

---

## Accessibility

✓ Semantic HTML

✓ Keyboard navigation

✓ Focus states

✓ Heading hierarchy

✓ Image alt text where required

✓ ARIA attributes where appropriate

---

## Performance

✓ No unnecessary dependencies

✓ No duplicate logic

✓ Images optimized

✓ Bundle size not unnecessarily increased

✓ Existing performance preserved

---

## Code Quality

✓ Readable

✓ Maintainable

✓ Reusable

✓ Consistent

✓ Minimal duplication

✓ Existing architecture respected

---

## Git

✓ Logical commit ready

✓ Only relevant files modified

✓ Commit message prepared

✓ Safe to push

---

## Documentation

If required:

✓ Update PROJECT_MEMORY.md

✓ Update TODO.md

✓ Update CHANGELOG.md

Do not update documentation unnecessarily.

Only when project knowledge has changed.

---

## Final Review

Before considering any task complete ask:

1. Does this improve the project?

2. Would another developer understand this code?

3. Is this the simplest correct solution?

4. Would I be comfortable maintaining this six months from now?

If the answer to any question is "No"

Continue improving before marking the task complete.


# 12. Project Knowledge Management

CLAUDE.md is the permanent constitution of the Sylntra website project.

It should remain stable over time.

Do not continuously append project decisions to this document.

Instead, maintain the following project documents.

---

## PROJECT_MEMORY.md

Purpose:

Store permanent project decisions.

Examples:

• Hero section finalized

• Services page decisions

• UX decisions

• Design rationale

• Architecture decisions

• Lessons learned

Only update when important long-term decisions have been made.

Do not record temporary work.

---

## TODO.md

Purpose:

Maintain the implementation roadmap.

Track:

• pending improvements

• current milestone

• future enhancements

• technical debt

Remove completed items.

Keep the roadmap concise.

---

## CHANGELOG.md

Purpose:

Maintain project history.

Record:

Version

Date

Completed milestone

Important improvements

Do not record every small code edit.

Only meaningful project milestones.

---

## README.md

Purpose:

Explain the project.

Include:

• Project overview

• Local setup

• Folder structure

• Technology stack

• Development workflow

• Build instructions

README should help a new developer become productive quickly.

---

# Documentation Rules

Documentation should be:

Accurate

Concise

Current

Actionable

Avoid unnecessary writing.

Only update documentation when project knowledge has changed.

---

# Knowledge Hierarchy

When making decisions, prioritize information in this order:

1. User instructions

2. CLAUDE.md

3. PROJECT_MEMORY.md

4. TODO.md

5. CHANGELOG.md

6. README.md

If documentation conflicts:

Ask for clarification before proceeding.

Never assume.

---

# Long-Term Philosophy

This project is intended to evolve for years.

Every implementation should improve:

Maintainability

Scalability

Reusability

Consistency

Business value

Do not optimize only for today's task.

Build a system that future developers—and future AI assistants—can understand and extend.

---

# Final Principle

Sylntra is built as a collection of reusable business systems.

Every page, component, workflow, document and engineering decision should contribute to that vision.

Do not build one-off solutions.

Build reusable assets.

Think in systems.

Always leave the project in a better state than you found it.
