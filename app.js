const concepts = [
    {
        title: "Repository", tag: "The project home", label: "Your project, under version control",
        definition: "A <strong>repository (repo)</strong> is a project folder whose history is tracked by Git. It holds your files and the record of how they changed over time.",
        consideration: "A repo can live only on your computer or also have a hosted remote such as GitHub. Keep generated files and secrets out of version control with a thoughtful .gitignore.",
        practice: "Initialize a repo in the project folder, then check its status before you start making changes.",
        command: "git init  ·  git status", motion: "repo",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Inside a Git repository</title><desc id="scene-desc">Project files flow into a tracked repository, where snapshots form a history.</desc>
            <text x="42" y="72" class="tiny">PROJECT FILES</text><g data-files><rect x="46" y="91" width="64" height="78" rx="3" class="file"/><path d="M59 111h35M59 123h27M59 135h32" class="file-line"/><rect x="119" y="91" width="64" height="78" rx="3" class="file"/><path d="M132 111h35M132 123h27M132 135h32" class="file-line"/><text x="65" y="157" class="tiny">app.js</text><text x="131" y="157" class="tiny">index.html</text></g>
            <path d="M205 130h118" class="motion-path"/><path d="m315 124 9 6-9 6" fill="none" stroke="#bd8b21" stroke-width="2"/><text x="226" y="116" class="tiny">git tracks changes</text>
            <rect x="345" y="58" width="291" height="162" rx="4" fill="#f7f4e3" stroke="#b7ad88" stroke-width="1.5"/><text x="365" y="84" class="strong">.git / repository</text><path d="M365 95h250" stroke="#d7d0ac"/>
            <path d="M390 157h190" class="line"/><circle cx="405" cy="157" r="8" class="gold-node"/><circle cx="475" cy="157" r="8" class="node"/><circle cx="545" cy="157" r="8" class="node"/><text x="390" y="188" class="tiny">snapshot history</text><text x="528" y="188" class="tiny">latest</text><g data-spark><path d="M475 144v-23h70v23" fill="none" stroke="#537653" stroke-width="1.5"/><text x="486" y="112" class="tiny">working tree</text></g></svg>`
    },
    {
        title: "Clone", tag: "Get a local copy", label: "A hosted project copied to your machine",
        definition: "To <strong>clone</strong> is to download a repository to your machine. Git brings the files and their commit history along, ready for local work.",
        consideration: "Cloning creates a connection to the original remote, usually named origin. You need access to the repository, and the URL must point to the right project.",
        practice: "Clone once to get started; after that, use fetch or pull to bring in updates instead of making another copy.",
        command: "git clone https://github.com/team/project.git", motion: "clone",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Clone a repository</title><desc id="scene-desc">A repository is copied from a hosted server to a developer's computer.</desc>
            <rect x="57" y="64" width="190" height="149" rx="5" fill="#f7f4e3" stroke="#b7ad88" stroke-width="1.5"/><circle cx="77" cy="83" r="4" fill="#c65e45"/><circle cx="91" cy="83" r="4" fill="#bd8b21"/><text x="73" y="115" class="strong">hosted remote</text><path d="M78 129h148" stroke="#d7d0ac"/><path d="M89 164h23m12 0h23m12 0h23m12 0h23" class="line"/><circle cx="90" cy="164" r="6" class="gold-node"/><circle cx="126" cy="164" r="6" class="node"/><circle cx="162" cy="164" r="6" class="node"/><circle cx="198" cy="164" r="6" class="node"/><text x="79" y="190" class="tiny">history + files</text>
            <path d="M281 135h116" class="motion-path"/><path d="m389 128 10 7-10 7" fill="none" stroke="#bd8b21" stroke-width="2"/><text x="301" y="118" class="tiny">clone</text><g data-packet><rect x="325" y="125" width="32" height="21" rx="3" fill="#bd8b21"/><path d="M331 132h20m-20 5h14" stroke="#f4f1dc" stroke-width="1.5"/></g>
            <rect x="432" y="83" width="183" height="133" rx="5" fill="#211b17"/><rect x="447" y="99" width="153" height="101" rx="3" fill="#f7f4e3"/><text x="462" y="124" class="strong">your computer</text><rect x="463" y="138" width="119" height="43" rx="2" fill="#e5e0c8"/><path d="M475 151h50m-50 10h81" class="file-line"/><text x="463" y="193" class="tiny">project/</text></svg>`
    },
    {
        title: "Branch", tag: "Work in parallel", label: "A separate line of development",
        definition: "A <strong>branch</strong> is a lightweight, movable name for a line of commits. It lets you work on a feature or fix without changing the branch others are using.",
        consideration: "Branches are inexpensive, but they can drift apart. Name them clearly, keep them focused, and sync with the base branch regularly.",
        practice: "Create a branch from the point where you want your work to begin, then switch to it.",
        command: "git switch -c feature/search", motion: "branch",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Branches diverge and continue in parallel</title><desc id="scene-desc">A feature branch starts from main and develops independently.</desc>
            <text x="61" y="77" class="tiny">main</text><text x="61" y="208" class="tiny">feature/search</text><path d="M111 126h481" class="line"/><path d="M111 126h105c30 0 34 66 66 66h310" class="gold-line"/><circle cx="113" cy="126" r="8" class="node"/><circle cx="216" cy="126" r="8" class="node"/><circle cx="326" cy="126" r="8" class="node"/><circle cx="436" cy="126" r="8" class="node"/><circle cx="546" cy="126" r="8" class="green-node"/><circle cx="216" cy="192" r="8" class="gold-node"/><circle cx="326" cy="192" r="8" class="gold-node"/><circle cx="436" cy="192" r="8" class="gold-node"/><g data-new-branch><circle cx="546" cy="192" r="9" class="coral-node"/><path d="M544 192h4m-2-2v4" stroke="#fff8e8" stroke-width="1.5"/></g><text x="202" y="105" class="tiny">branch point</text><text x="508" y="229" class="tiny">new work stays here</text></svg>`
    },
    {
        title: "Commit", tag: "Save a snapshot", label: "A named point in your project history",
        definition: "A <strong>commit</strong> is a snapshot of selected changes, recorded with a message. Commits build the history that you can inspect, compare, or restore.",
        consideration: "A commit includes only what you stage. Keep commits focused and write messages that explain the change, not just the file you touched.",
        practice: "Review the staged diff before committing so the snapshot contains exactly what you intend.",
        command: "git add src/search.js  ·  git commit -m \"Add search\"", motion: "commit",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Changes become a commit</title><desc id="scene-desc">A staged change is recorded as a new snapshot in project history.</desc>
            <text x="47" y="82" class="tiny">STAGED CHANGE</text><rect x="48" y="96" width="177" height="100" rx="4" class="file"/><path d="M66 119h131M66 135h93M66 151h111" class="file-line"/><rect x="66" y="163" width="72" height="18" rx="2" fill="#dce5d2"/><text x="75" y="176" class="tiny">+ new search</text>
            <path d="M250 145h106" class="motion-path"/><path d="m347 138 10 7-10 7" fill="none" stroke="#bd8b21" stroke-width="2"/><text x="277" y="128" class="tiny">commit</text>
            <text x="382" y="82" class="tiny">PROJECT HISTORY</text><path d="M404 148h216" class="line"/><circle cx="415" cy="148" r="8" class="node"/><circle cx="490" cy="148" r="8" class="node"/><g data-commit><circle cx="578" cy="148" r="13" class="green-node"/><path d="m572 148 4 4 8-9" fill="none" stroke="#fff8e8" stroke-width="2"/></g><text x="389" y="185" class="tiny">earlier</text><text x="552" y="185" class="tiny">Add search</text><text x="420" y="226" class="label">A useful message makes this snapshot findable later.</text></svg>`
    },
    {
        title: "Push / Pull", tag: "Sync with a remote", label: "Share local commits and receive others' work",
        definition: "<strong>Push</strong> sends your local commits to a hosted repository. <strong>Pull</strong> fetches remote changes and integrates them into your current branch.",
        consideration: "A push can be rejected if the remote has commits you do not have yet. Pull before you push when collaborating, and review how incoming changes affect your work.",
        practice: "Fetch to inspect what's new; pull when you're ready to integrate it into your current branch.",
        command: "git pull  ·  git push", motion: "sync",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Push and pull between local and remote</title><desc id="scene-desc">Commits move in both directions between a local repository and its hosted remote.</desc>
            <rect x="65" y="75" width="225" height="139" rx="4" fill="#f7f4e3" stroke="#b7ad88" stroke-width="1.5"/><text x="84" y="101" class="strong">local repo</text><path d="M93 153h156" class="line"/><circle cx="104" cy="153" r="7" class="node"/><circle cx="164" cy="153" r="7" class="node"/><circle cx="224" cy="153" r="7" class="gold-node"/><text x="84" y="189" class="tiny">your machine</text>
            <rect x="389" y="75" width="225" height="139" rx="4" fill="#f7f4e3" stroke="#b7ad88" stroke-width="1.5"/><text x="408" y="101" class="strong">remote repo</text><path d="M417 153h156" class="line"/><circle cx="428" cy="153" r="7" class="node"/><circle cx="488" cy="153" r="7" class="gold-node"/><circle cx="548" cy="153" r="7" class="blue-node"/><text x="408" y="189" class="tiny">hosted on GitHub</text>
            <g data-push><path d="M302 125h68" class="gold-line"/><path d="m362 118 10 7-10 7" fill="none" stroke="#bd8b21" stroke-width="2"/><text x="321" y="114" class="tiny">push</text></g><g data-pull><path d="M370 173h-68" class="line"/><path d="m310 166-10 7 10 7" fill="none" stroke="#8d826a" stroke-width="2"/><text x="327" y="198" class="tiny">pull</text></g></svg>`
    },
    {
        title: "Diff", tag: "See what changed", label: "A line-by-line comparison",
        definition: "A <strong>diff</strong> shows the difference between two versions of files. It highlights added, removed, and modified lines so you can review a change before sharing it.",
        consideration: "The comparison depends on which two versions you choose: working tree, staged changes, commits, or branches. A diff explains what changed, not whether the change is correct.",
        practice: "Use a diff in your review loop, especially before staging or committing a broad set of edits.",
        command: "git diff  ·  git diff --staged", motion: "diff",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Review a diff</title><desc id="scene-desc">Two versions of a file show a removed line in red and an added line in green.</desc>
            <text x="72" y="77" class="tiny">BEFORE</text><text x="362" y="77" class="tiny">AFTER</text><rect x="69" y="89" width="246" height="146" rx="4" fill="#f7f4e3" stroke="#d7d0ac"/><rect x="357" y="89" width="246" height="146" rx="4" fill="#f7f4e3" stroke="#d7d0ac"/><text x="88" y="116" class="tiny">src/greeting.js</text><text x="376" y="116" class="tiny">src/greeting.js</text>
            <path d="M88 137h172M88 158h154M88 179h171M88 200h140" class="file-line"/><path d="M376 137h172M376 158h154M376 200h140" class="file-line"/>
            <rect data-removed x="82" y="168" width="219" height="20" rx="2" fill="#f3d9ce"/><text x="91" y="182" fill="#a84e3a" font-size="9">- "Hello, world"</text><rect data-added x="370" y="168" width="219" height="20" rx="2" fill="#dce7d3"/><text x="379" y="182" fill="#416b45" font-size="9">+ "Hello, Git"</text><path d="M324 161h22" class="gold-line"/><path d="m340 155 8 6-8 6" fill="none" stroke="#bd8b21" stroke-width="2"/><text x="279" y="257" class="tiny">one line removed, one line added</text></svg>`
    },
    {
        title: "Merge", tag: "Bring work together", label: "Integrate one branch into another",
        definition: "To <strong>merge</strong> is to combine the changes from one branch into another. Git records the combined result, and sometimes a merge commit that connects both histories.",
        consideration: "Choose the branch that should receive the work before merging. Review the result and run your checks; a clean merge does not guarantee the code behaves correctly.",
        practice: "Usually, switch to the destination branch first, then merge the branch containing the finished work.",
        command: "git switch main  ·  git merge feature/search", motion: "merge",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Merge a feature branch into main</title><desc id="scene-desc">Two lines of history meet at a merge commit.</desc>
            <text x="55" y="83" class="tiny">main</text><text x="55" y="210" class="tiny">feature</text><path d="M106 126h466" class="line"/><path d="M106 126h74c55 0 59 70 114 70h160c52 0 64-70 118-70" class="gold-line"/><circle cx="107" cy="126" r="8" class="node"/><circle cx="219" cy="126" r="8" class="node"/><circle cx="328" cy="126" r="8" class="node"/><circle cx="458" cy="126" r="8" class="node"/><circle cx="180" cy="196" r="8" class="gold-node"/><circle cx="290" cy="196" r="8" class="gold-node"/><circle cx="395" cy="196" r="8" class="gold-node"/><g data-merge><circle cx="572" cy="126" r="14" class="green-node"/><path d="m565 126 5 5 9-10" fill="none" stroke="#fff8e8" stroke-width="2"/></g><text x="528" y="157" class="tiny">merged</text><text x="241" y="245" class="label">Feature history becomes part of main.</text></svg>`
    },
    {
        title: "Rebase", tag: "Replay your commits", label: "Move your work onto a newer base",
        definition: "To <strong>rebase</strong> is to replay your branch's commits on top of another base, often the latest main. This creates a straighter history while keeping your changes.",
        consideration: "Rebase rewrites commit identities. It's generally safe for your own unpublished work, but avoid rewriting a branch other people already depend on unless your team agrees.",
        practice: "Update your view of the base branch first, then replay your feature commits on it and resolve any conflicts carefully.",
        command: "git fetch origin  ·  git rebase origin/main", motion: "rebase",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Rebase feature work onto updated main</title><desc id="scene-desc">Feature commits are replayed in order above the newest main commit.</desc>
            <text x="60" y="111" class="tiny">main before</text><path d="M151 105h220" class="line"/><circle cx="163" cy="105" r="8" class="node"/><circle cx="263" cy="105" r="8" class="node"/><circle cx="363" cy="105" r="8" class="node"/><text x="60" y="224" class="tiny">feature commits</text><g data-feature-old><path d="M151 213h220" class="gold-line"/><circle cx="163" cy="213" r="8" class="gold-node"/><circle cx="263" cy="213" r="8" class="gold-node"/><circle cx="363" cy="213" r="8" class="gold-node"/></g>
            <path d="M397 150h82" class="motion-path"/><path d="m472 143 10 7-10 7" fill="none" stroke="#bd8b21" stroke-width="2"/><text x="405" y="137" class="tiny">replay</text><text x="492" y="111" class="tiny">updated main</text><path d="M514 105h116" class="line"/><circle cx="521" cy="105" r="8" class="node"/><circle cx="568" cy="105" r="8" class="node"/><g data-feature-new><path d="M568 105v108h62" class="gold-line"/><circle cx="568" cy="145" r="8" class="gold-node"/><circle cx="568" cy="183" r="8" class="gold-node"/><circle cx="630" cy="213" r="8" class="coral-node"/></g><text x="496" y="250" class="tiny">new linear history</text></svg>`
    },
    {
        title: "Merge conflict", tag: "Resolve a disagreement", label: "Both branches changed the same place",
        definition: "A <strong>merge conflict</strong> happens when Git cannot automatically combine overlapping edits. You inspect the competing versions, decide on the right result, and mark the conflict resolved.",
        consideration: "Conflicts are a normal part of collaboration. Read both changes in context rather than accepting one side by habit, then test the resolved file before continuing.",
        practice: "The conflict markers in a file separate the current branch, the incoming change, and the shared base when available.",
        command: "git status  ·  edit the file  ·  git add <file>", motion: "conflict",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Resolve a merge conflict</title><desc id="scene-desc">Two conflicting versions are compared, and a resolved result is chosen.</desc>
            <text x="62" y="72" class="tiny">CURRENT BRANCH</text><text x="379" y="72" class="tiny">INCOMING CHANGE</text><rect data-side-a x="59" y="84" width="240" height="92" rx="4" fill="#f7f4e3" stroke="#c65e45" stroke-width="1.5"/><rect data-side-b x="374" y="84" width="240" height="92" rx="4" fill="#f7f4e3" stroke="#477a89" stroke-width="1.5"/><text x="78" y="113" class="tiny">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</text><text x="78" y="142" class="strong">color: coral;</text><text x="393" y="113" class="tiny">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</text><text x="393" y="142" class="strong">color: blue;</text>
            <path d="M299 128h73" class="line"/><path d="m359 121 10 7-10 7" fill="none" stroke="#8d826a" stroke-width="2"/><text x="317" y="112" class="tiny">you decide</text><rect data-resolution x="205" y="202" width="270" height="46" rx="3" fill="#dce5d2" stroke="#537653" stroke-width="1.5"/><text x="228" y="222" class="tiny">RESOLVED VERSION</text><text x="228" y="239" class="strong">color: deep teal;</text></svg>`
    },
    {
        title: "Pull Request", tag: "Ask for a review", label: "A proposal to merge changes on GitHub",
        definition: "A <strong>pull request (PR)</strong> is a place to discuss, review, and check a branch before merging it into another. It connects your work to feedback and automated checks.",
        consideration: "A PR is a collaboration workflow, not a Git command. Keep it focused, explain why the change matters, and respond to review feedback before merging.",
        practice: "Open a PR from your topic branch to its intended base branch once your changes are pushed and ready to discuss.",
        command: "git push -u origin feature/search  ·  Open a PR", motion: "pr",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">A pull request moves through review</title><desc id="scene-desc">A feature branch enters review, passes checks, and is ready to merge into main.</desc>
            <text x="54" y="82" class="tiny">FEATURE BRANCH</text><path d="M75 143h113" class="gold-line"/><circle cx="83" cy="143" r="8" class="gold-node"/><circle cx="133" cy="143" r="8" class="gold-node"/><circle cx="183" cy="143" r="8" class="gold-node"/>
            <path d="M195 143h70" class="motion-path"/><path d="m258 136 10 7-10 7" fill="none" stroke="#bd8b21" stroke-width="2"/><g data-pr-card><rect x="278" y="84" width="214" height="117" rx="4" fill="#f7f4e3" stroke="#b7ad88" stroke-width="1.5"/><text x="298" y="110" class="strong">Add search</text><text x="298" y="130" class="tiny">#24 · Open for review</text><path d="M298 143h170" stroke="#d7d0ac"/><circle cx="307" cy="163" r="6" class="green-node"/><text x="321" y="166" class="tiny">checks passed</text><circle cx="307" cy="183" r="6" class="gold-node"/><text x="321" y="186" class="tiny">review approved</text></g>
            <path d="M497 143h68" class="line"/><path d="m557 136 10 7-10 7" fill="none" stroke="#8d826a" stroke-width="2"/><text x="547" y="123" class="tiny">merge</text><text x="570" y="153" class="tiny">main</text><circle cx="598" cy="143" r="12" class="green-node"/><path d="m592 143 4 4 8-9" fill="none" stroke="#fff8e8" stroke-width="2"/></svg>`
    },
    {
        title: "Issue", tag: "Track a task", label: "A ticket for a bug, feature, or question",
        definition: "An <strong>issue</strong> is a unit of work tracked on a hosting platform such as GitHub. It can describe a bug, propose a feature, ask a question, or coordinate a task.",
        consideration: "A useful issue gives enough context to act: what happened or is needed, how to reproduce it when relevant, and what outcome would count as done.",
        practice: "Link branches and pull requests to issues so the discussion, implementation, and final change stay connected.",
        command: "Create an issue on GitHub  ·  Close it with a linked PR", motion: "issue",
        art: `<svg class="scene" viewBox="0 0 680 280" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">An issue moves from open to done</title><desc id="scene-desc">A task passes through open, in progress, and completed states.</desc>
            <path d="M119 143h435" class="line"/><g data-state="open"><circle cx="137" cy="143" r="17" fill="#f4f1dc" stroke="#c65e45" stroke-width="2.5"/><circle cx="137" cy="143" r="5" fill="#c65e45"/><text x="102" y="188" class="strong">open</text><text x="85" y="207" class="tiny">issue #24</text></g><g data-state="progress"><circle cx="341" cy="143" r="17" fill="#f4f1dc" stroke="#bd8b21" stroke-width="2.5"/><path d="M341 133v11l8 5" fill="none" stroke="#bd8b21" stroke-width="2"/><text x="300" y="188" class="strong">in progress</text><text x="310" y="207" class="tiny">branch started</text></g><g data-state="done"><circle cx="544" cy="143" r="17" class="green-node"/><path d="m536 143 5 5 10-11" fill="none" stroke="#fff8e8" stroke-width="2"/><text x="525" y="188" class="strong">closed</text><text x="507" y="207" class="tiny">change merged</text></g><path d="M137 96h204" class="motion-path"/><text x="171" y="84" class="tiny">issue → branch → pull request</text></svg>`
    }
];

const index = document.querySelector("#concept-index");
const fields = {
    count: document.querySelector("#current-count"), title: document.querySelector("#lesson-title"),
    tag: document.querySelector("#lesson-tag"), definition: document.querySelector("#lesson-definition"),
    consideration: document.querySelector("#consideration"), practice: document.querySelector("#practice"),
    command: document.querySelector("#command"), scene: document.querySelector("#scene-container"),
    sceneLabel: document.querySelector("#scene-label"),
};
let activeIndex = 0;
let currentTimeline;

concepts.forEach((concept, position) => {
    const button = document.createElement("button");
    button.className = "index-item";
    button.type = "button";
    button.setAttribute("aria-current", position === 0 ? "true" : "false");
    button.innerHTML = `<span class="index-number">${String(position + 1).padStart(2, "0")}</span><span class="index-label">${concept.title}</span><i class="index-arrow fa-solid fa-arrow-right" aria-hidden="true"></i>`;
    button.addEventListener("click", () => showConcept(position));
    index.append(button);
});
document.querySelector("#total-count").textContent = String(concepts.length).padStart(2, "0");

function showConcept(position) {
    activeIndex = (position + concepts.length) % concepts.length;
    const concept = concepts[activeIndex];
    if (currentTimeline) currentTimeline.kill();
    fields.count.textContent = String(activeIndex + 1).padStart(2, "0");
    fields.title.textContent = concept.title;
    fields.tag.textContent = concept.tag;
    fields.definition.innerHTML = concept.definition;
    fields.consideration.textContent = concept.consideration;
    fields.practice.textContent = concept.practice;
    fields.command.textContent = concept.command;
    fields.sceneLabel.textContent = concept.label;
    fields.scene.innerHTML = concept.art;
    [...index.children].forEach((button, itemIndex) => button.setAttribute("aria-current", String(itemIndex === activeIndex)));
    if (window.matchMedia("(max-width: 820px)").matches) {
        index.children[activeIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    animateScene(concept.motion);
}

function animateScene(motion) {
    if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scene = fields.scene.querySelector("svg");
    const q = (selector) => scene.querySelector(selector);
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
    currentTimeline = timeline;
    switch (motion) {
        case "repo":
            timeline.from(q("[data-files]"), { x: -14, opacity: 0, duration: .6 })
                .from(q("[data-spark]"), { y: 9, opacity: 0, duration: .4 }, "-=.18");
            break;
        case "clone":
            timeline.fromTo(q("[data-packet]"), { x: -19, opacity: .3 }, { x: 22, opacity: 1, duration: .8, ease: "power1.inOut", repeat: 1, yoyo: true });
            break;
        case "branch":
            timeline.from(q("[data-new-branch]"), { scale: .2, transformOrigin: "546px 192px", opacity: 0, duration: .55 })
                .to(q("[data-new-branch]"), { scale: 1.22, transformOrigin: "546px 192px", duration: .22, yoyo: true, repeat: 1 });
            break;
        case "commit":
            timeline.from(q("[data-commit]"), { scale: .1, transformOrigin: "578px 148px", opacity: 0, duration: .5 })
                .to(q("[data-commit]"), { scale: 1.15, transformOrigin: "578px 148px", duration: .2, yoyo: true, repeat: 1 });
            break;
        case "sync":
            timeline.fromTo(q("[data-push]"), { x: -9, opacity: .45 }, { x: 8, opacity: 1, duration: .55, yoyo: true, repeat: 1 })
                .fromTo(q("[data-pull]"), { x: 8, opacity: .45 }, { x: -8, opacity: 1, duration: .55, yoyo: true, repeat: 1 }, "-=.8");
            break;
        case "diff":
            timeline.fromTo(q("[data-removed]"), { opacity: .15 }, { opacity: 1, duration: .45, repeat: 1, yoyo: true })
                .fromTo(q("[data-added]"), { opacity: .15 }, { opacity: 1, duration: .45, repeat: 1, yoyo: true }, "-=.5");
            break;
        case "merge":
            timeline.from(q("[data-merge]"), { scale: .1, transformOrigin: "572px 126px", opacity: 0, duration: .5 })
                .to(q("[data-merge]"), { scale: 1.15, transformOrigin: "572px 126px", duration: .2, yoyo: true, repeat: 1 });
            break;
        case "rebase":
            timeline.to(q("[data-feature-old]"), { y: -108, opacity: .18, duration: .5, ease: "power1.inOut" })
                .from(q("[data-feature-new]"), { y: 14, opacity: 0, duration: .55 }, "-=.1");
            break;
        case "conflict":
            timeline.fromTo(q("[data-side-a]"), { opacity: .45 }, { opacity: 1, duration: .4, repeat: 1, yoyo: true })
                .fromTo(q("[data-side-b]"), { opacity: .45 }, { opacity: 1, duration: .4, repeat: 1, yoyo: true }, "-=.4")
                .from(q("[data-resolution]"), { y: 10, opacity: 0, duration: .4 });
            break;
        case "pr":
            timeline.from(q("[data-pr-card]"), { y: 15, opacity: 0, duration: .55 })
                .to(q("[data-pr-card]"), { y: -3, duration: .25, yoyo: true, repeat: 1 });
            break;
        case "issue":
            timeline.from("[data-state]", { scale: .6, transformOrigin: "center", opacity: .4, duration: .4, stagger: .2 });
            break;
    }
}

document.querySelector("#previous").addEventListener("click", () => showConcept(activeIndex - 1));
document.querySelector("#next").addEventListener("click", () => showConcept(activeIndex + 1));
document.querySelector("#replay").addEventListener("click", () => showConcept(activeIndex));
document.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "ArrowLeft") showConcept(activeIndex - 1);
    if (event.altKey && event.key === "ArrowRight") showConcept(activeIndex + 1);
});
showConcept(0);
