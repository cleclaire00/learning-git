/* Scenes are drawn on a shared 1600 x 520 stage so every demonstration
   fills the full-bleed band at the same scale and reads from across a room. */

const concepts = [
    {
        title: "Repository", tag: "The project home", label: "Your project, under version control",
        definition: "A <strong>repository (repo)</strong> is a project folder whose history is tracked by Git. It holds your files and the record of how they changed over time.",
        consideration: "A repo can live only on your computer or also have a hosted remote such as GitHub. Keep generated files and secrets out of version control with a thoughtful .gitignore.",
        practice: "Initialize a repo in the project folder, then check its status before you start making changes.",
        command: "git init  ·  git status", motion: "repo",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Inside a Git repository</title><desc id="scene-desc">Project files flow into a tracked repository, where snapshots form a history.</desc>
            <text x="80" y="108" class="tiny">PROJECT FILES</text>
            <g data-files>
                <g data-file><rect x="80" y="140" width="128" height="196" rx="6" class="file"/><path d="M108 184h72M108 212h50M108 240h64M108 268h40" class="file-line"/><text x="80" y="372" class="tiny">app.js</text></g>
                <g data-file><rect x="226" y="140" width="128" height="196" rx="6" class="file"/><path d="M254 184h72M254 212h50M254 240h64M254 268h40" class="file-line"/><text x="226" y="372" class="tiny">index.html</text></g>
                <g data-file><rect x="372" y="140" width="128" height="196" rx="6" class="file"/><path d="M400 184h72M400 212h50M400 240h64M400 268h40" class="file-line"/><text x="372" y="372" class="tiny">style.css</text></g>
            </g>
            <path d="M540 238h146" class="motion-path" data-track/><path d="m682 226 15 12-15 12" class="tip"/>
            <text x="540" y="206" class="tiny">git tracks changes</text>
            <rect x="748" y="92" width="782" height="336" rx="10" class="panel" data-panel/>
            <text x="790" y="152" class="strong">.git / repository</text><path d="M790 178h700" class="rule"/>
            <path d="M840 300h620" class="line" data-spine/>
            <circle cx="850" cy="300" r="19" class="gold-node" data-node/><circle cx="1000" cy="300" r="19" class="node" data-node/><circle cx="1150" cy="300" r="19" class="node" data-node/><circle cx="1300" cy="300" r="19" class="node" data-node/><circle cx="1450" cy="300" r="19" class="node" data-node/>
            <text x="806" y="364" class="tiny">snapshot history</text><text x="1406" y="364" class="tiny">latest</text>
            <g data-spark><path d="M1300 270v-46h150v46" fill="none" stroke="#537653" stroke-width="3"/><text x="1310" y="212" class="tiny">working tree</text></g>
            <text x="80" y="478" class="label">Everything Git knows about this project lives in the .git folder.</text></svg>`
    },
    {
        title: "Clone", tag: "Get a local copy", label: "A hosted project copied to your machine",
        definition: "To <strong>clone</strong> is to download a repository to your machine. Git brings the files and their commit history along, ready for local work.",
        consideration: "Cloning creates a connection to the original remote, usually named origin. You need access to the repository, and the URL must point to the right project.",
        practice: "Clone once to get started; after that, use fetch or pull to bring in updates instead of making another copy.",
        command: "git clone https://github.com/team/project.git", motion: "clone",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Clone a repository</title><desc id="scene-desc">A repository is copied from a hosted server to a developer's computer.</desc>
            <rect x="80" y="110" width="450" height="304" rx="10" class="panel" data-panel/>
            <circle cx="120" cy="152" r="9" fill="#c65e45"/><circle cx="150" cy="152" r="9" fill="#bd8b21"/><circle cx="180" cy="152" r="9" fill="#537653"/>
            <text x="120" y="222" class="strong">hosted remote</text><path d="M120 250h370" class="rule"/>
            <path d="M136 320h338" class="line" data-spine/>
            <circle cx="140" cy="320" r="16" class="gold-node" data-node/><circle cx="252" cy="320" r="16" class="node" data-node/><circle cx="364" cy="320" r="16" class="node" data-node/><circle cx="470" cy="320" r="16" class="node" data-node/>
            <text x="120" y="382" class="tiny">history + files</text>
            <path d="M576 262h294" class="motion-path" data-track/><path d="m862 250 15 12-15 12" class="tip"/>
            <text x="576" y="230" class="tiny">git clone</text>
            <g data-packet><rect x="600" y="238" width="76" height="50" rx="6" fill="#bd8b21"/><path d="M620 258h36m-36 16h22" stroke="#f4f1dc" stroke-width="3" stroke-linecap="round"/></g>
            <g data-machine>
                <rect x="920" y="110" width="530" height="300" rx="12" fill="#211b17"/><rect x="952" y="142" width="466" height="236" rx="6" fill="#f7f4e3"/>
                <rect x="886" y="420" width="598" height="16" rx="8" fill="#211b17"/>
                <text x="986" y="198" class="strong">your computer</text><text x="1300" y="198" class="tiny">project/</text>
                <rect x="986" y="226" width="398" height="122" rx="4" fill="#e5e0c8"/><path d="M1014 262h150M1014 292h260M1014 322h196" class="file-line"/>
            </g>
            <text x="80" y="486" class="label">One copy, complete with every commit that came before it.</text></svg>`
    },
    {
        title: "Branch", tag: "Work in parallel", label: "A separate line of development",
        definition: "A <strong>branch</strong> is a lightweight, movable name for a line of commits. It lets you work on a feature or fix without changing the branch others are using.",
        consideration: "Branches are inexpensive, but they can drift apart. Name them clearly, keep them focused, and sync with the base branch regularly.",
        practice: "Create a branch from the point where you want your work to begin, then switch to it.",
        command: "git switch -c feature/search", motion: "branch",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Branches diverge and continue in parallel</title><desc id="scene-desc">A feature branch starts from main and develops independently.</desc>
            <text x="82" y="190" class="tiny">main</text><text x="82" y="390" class="tiny">feature/search</text>
            <path d="M200 180h1300" class="line" data-spine/>
            <path d="M444 180c110 0 120 200 230 200h826" class="gold-line" data-branch-path/>
            <circle cx="210" cy="180" r="19" class="node" data-main-node/><circle cx="444" cy="180" r="19" class="node" data-main-node/><circle cx="700" cy="180" r="19" class="node" data-main-node/><circle cx="956" cy="180" r="19" class="node" data-main-node/><circle cx="1212" cy="180" r="19" class="node" data-main-node/><circle cx="1468" cy="180" r="19" class="node" data-main-node/>
            <circle cx="760" cy="380" r="19" class="gold-node" data-feature-node/><circle cx="1000" cy="380" r="19" class="gold-node" data-feature-node/><circle cx="1240" cy="380" r="19" class="gold-node" data-feature-node/>
            <g data-new-branch><circle cx="1468" cy="380" r="23" class="coral-node"/><path d="M1458 380h20m-10-10v20" class="mark"/></g>
            <text x="380" y="134" class="tiny">branch point</text><text x="1272" y="444" class="tiny">new work stays here</text>
            <text x="200" y="478" class="label">Both lines move forward without disturbing each other.</text></svg>`
    },
    {
        title: "Commit", tag: "Save a snapshot", label: "A named point in your project history",
        definition: "A <strong>commit</strong> is a snapshot of selected changes, recorded with a message. Commits build the history that you can inspect, compare, or restore.",
        consideration: "A commit includes only what you stage. Keep commits focused and write messages that explain the change, not just the file you touched.",
        practice: "Review the staged diff before committing so the snapshot contains exactly what you intend.",
        command: "git add src/search.js  ·  git commit -m \"Add search\"", motion: "commit",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Changes become a commit</title><desc id="scene-desc">A staged change is recorded as a new snapshot in project history.</desc>
            <text x="82" y="108" class="tiny">STAGED CHANGE</text>
            <g data-staged><rect x="80" y="134" width="440" height="266" rx="8" class="file"/><path d="M118 192h340M118 230h236M118 268h296" class="file-line"/>
            <rect x="118" y="300" width="240" height="48" rx="4" fill="#dce5d2"/><text x="140" y="332" font-size="19" fill="#416b45">+ new search</text></g>
            <path d="M568 264h132" class="motion-path" data-track/><path d="m692 252 15 12-15 12" class="tip"/>
            <text x="568" y="232" class="tiny">git commit</text>
            <text x="780" y="108" class="tiny">PROJECT HISTORY</text>
            <path d="M800 264h620" class="line" data-spine/>
            <circle cx="810" cy="264" r="18" class="node" data-node/><circle cx="1000" cy="264" r="18" class="node" data-node/><circle cx="1190" cy="264" r="18" class="node" data-node/>
            <g data-commit><circle cx="1400" cy="264" r="30" class="green-node"/><path d="m1385 264 11 12 21-24" class="mark"/></g>
            <circle cx="1400" cy="264" r="30" fill="none" stroke="#537653" stroke-width="3" data-pulse opacity="0"/>
            <text x="800" y="330" class="tiny">earlier</text><text x="1338" y="338" class="tiny">Add search</text>
            <text x="800" y="440" class="label">A useful message makes this snapshot findable later.</text></svg>`
    },
    {
        title: "Push / Pull", tag: "Sync with a remote", label: "Share local commits and receive others' work",
        definition: "<strong>Push</strong> sends your local commits to a hosted repository. <strong>Pull</strong> fetches remote changes and integrates them into your current branch.",
        consideration: "A push can be rejected if the remote has commits you do not have yet. Pull before you push when collaborating, and review how incoming changes affect your work.",
        practice: "Fetch to inspect what's new; pull when you're ready to integrate it into your current branch.",
        command: "git pull  ·  git push", motion: "sync",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Push and pull between local and remote</title><desc id="scene-desc">Commits move in both directions between a local repository and its hosted remote.</desc>
            <rect x="80" y="108" width="540" height="306" rx="10" class="panel" data-panel/>
            <text x="120" y="168" class="strong">local repo</text><path d="M120 196h460" class="rule"/>
            <path d="M160 296h380" class="line"/><circle cx="166" cy="296" r="17" class="node"/><circle cx="352" cy="296" r="17" class="node"/><circle cx="538" cy="296" r="17" class="gold-node"/>
            <text x="120" y="372" class="tiny">your machine</text>
            <rect x="980" y="108" width="540" height="306" rx="10" class="panel" data-panel/>
            <text x="1020" y="168" class="strong">remote repo</text><path d="M1020 196h460" class="rule"/>
            <path d="M1060 296h380" class="line"/><circle cx="1066" cy="296" r="17" class="node"/><circle cx="1252" cy="296" r="17" class="gold-node"/><circle cx="1438" cy="296" r="17" class="blue-node"/>
            <text x="1020" y="372" class="tiny">hosted on GitHub</text>
            <g data-push><path d="M654 226h258" class="gold-line"/><path d="m904 214 16 12-16 12" class="tip"/><text x="700" y="192" class="tiny">git push</text></g>
            <g data-pull><path d="M946 338H688" class="line"/><path d="m696 326-16 12 16 12" class="tip-muted"/><text x="760" y="394" class="tiny">git pull</text></g></svg>`
    },
    {
        title: "Diff", tag: "See what changed", label: "A line-by-line comparison",
        definition: "A <strong>diff</strong> shows the difference between two versions of files. It highlights added, removed, and modified lines so you can review a change before sharing it.",
        consideration: "The comparison depends on which two versions you choose: working tree, staged changes, commits, or branches. A diff explains what changed, not whether the change is correct.",
        practice: "Use a diff in your review loop, especially before staging or committing a broad set of edits.",
        command: "git diff  ·  git diff --staged", motion: "diff",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Review a diff</title><desc id="scene-desc">Two versions of a file show a removed line in red and an added line in green.</desc>
            <text x="82" y="104" class="tiny">BEFORE</text><text x="882" y="104" class="tiny">AFTER</text>
            <rect x="80" y="126" width="640" height="310" rx="8" fill="#f7f4e3" stroke="#d7d0ac" stroke-width="2" data-panel/>
            <rect x="880" y="126" width="640" height="310" rx="8" fill="#f7f4e3" stroke="#d7d0ac" stroke-width="2" data-panel/>
            <text x="116" y="176" class="tiny">src/greeting.js</text><text x="916" y="176" class="tiny">src/greeting.js</text>
            <path d="M116 220h450M116 260h380M116 358h420M116 398h300" class="file-line"/>
            <path d="M916 220h450M916 260h380M916 358h420M916 398h300" class="file-line"/>
            <g data-removed><rect x="102" y="286" width="594" height="48" rx="4" fill="#f3d9ce"/><text x="128" y="318" font-size="20" fill="#a84e3a">- "Hello, world"</text></g>
            <g data-added><rect x="902" y="286" width="594" height="48" rx="4" fill="#dce7d3"/><text x="928" y="318" font-size="20" fill="#416b45">+ "Hello, Git"</text></g>
            <path d="M740 298h88" class="gold-line"/><path d="m820 286 15 12-15 12" class="tip"/>
            <text x="630" y="486" class="tiny">one line removed, one line added</text></svg>`
    },
    {
        title: "Merge", tag: "Bring work together", label: "Integrate one branch into another",
        definition: "To <strong>merge</strong> is to combine the changes from one branch into another. Git records the combined result, and sometimes a merge commit that connects both histories.",
        consideration: "Choose the branch that should receive the work before merging. Review the result and run your checks; a clean merge does not guarantee the code behaves correctly.",
        practice: "Usually, switch to the destination branch first, then merge the branch containing the finished work.",
        command: "git switch main  ·  git merge feature/search", motion: "merge",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Merge a feature branch into main</title><desc id="scene-desc">Two lines of history meet at a merge commit.</desc>
            <text x="82" y="190" class="tiny">main</text><text x="82" y="390" class="tiny">feature</text>
            <path d="M200 180h1180" class="line" data-spine/>
            <path d="M330 180c120 0 130 200 250 200h550c120 0 130-200 250-200" class="gold-line" data-branch-path/>
            <circle cx="210" cy="180" r="19" class="node" data-main-node/><circle cx="330" cy="180" r="19" class="node" data-main-node/><circle cx="620" cy="180" r="19" class="node" data-main-node/><circle cx="910" cy="180" r="19" class="node" data-main-node/><circle cx="1200" cy="180" r="19" class="node" data-main-node/>
            <circle cx="640" cy="380" r="19" class="gold-node" data-feature-node/><circle cx="860" cy="380" r="19" class="gold-node" data-feature-node/><circle cx="1080" cy="380" r="19" class="gold-node" data-feature-node/>
            <g data-merge><circle cx="1380" cy="180" r="32" class="green-node"/><path d="m1364 180 12 13 22-26" class="mark"/></g>
            <circle cx="1380" cy="180" r="32" fill="none" stroke="#537653" stroke-width="3" data-pulse opacity="0"/>
            <text x="1300" y="124" class="tiny">merge commit</text>
            <text x="560" y="462" class="label">Feature history becomes part of main.</text></svg>`
    },
    {
        title: "Rebase", tag: "Replay your commits", label: "Move your work onto a newer base",
        definition: "To <strong>rebase</strong> is to replay your branch's commits on top of another base, often the latest main. This creates a straighter history while keeping your changes.",
        consideration: "Rebase rewrites commit identities. It's generally safe for your own unpublished work, but avoid rewriting a branch other people already depend on unless your team agrees.",
        practice: "Update your view of the base branch first, then replay your feature commits on it and resolve any conflicts carefully.",
        command: "git fetch origin  ·  git rebase origin/main", motion: "rebase",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Rebase feature work onto updated main</title><desc id="scene-desc">Feature commits are replayed in order above the newest main commit.</desc>
            <text x="82" y="130" class="tiny">main before</text>
            <path d="M170 164h420" class="line"/><circle cx="180" cy="164" r="18" class="node"/><circle cx="380" cy="164" r="18" class="node"/><circle cx="580" cy="164" r="18" class="node"/>
            <text x="82" y="430" class="tiny">feature commits</text>
            <g data-feature-old><path d="M170 396h420" class="gold-line"/><circle cx="180" cy="396" r="18" class="gold-node"/><circle cx="380" cy="396" r="18" class="gold-node"/><circle cx="580" cy="396" r="18" class="gold-node"/></g>
            <path d="M666 280h128" class="motion-path" data-track/><path d="m786 268 15 12-15 12" class="tip"/>
            <text x="666" y="248" class="tiny">git rebase</text>
            <text x="862" y="130" class="tiny">updated main</text>
            <path d="M880 164h260" class="line"/><circle cx="890" cy="164" r="18" class="node"/><circle cx="1015" cy="164" r="18" class="node"/><circle cx="1140" cy="164" r="18" class="node"/>
            <g data-feature-new><path d="M1140 164h330" class="gold-line"/><circle cx="1250" cy="164" r="18" class="gold-node" data-replayed/><circle cx="1360" cy="164" r="18" class="gold-node" data-replayed/><circle cx="1470" cy="164" r="18" class="coral-node" data-replayed/></g>
            <text x="1190" y="230" class="tiny">replayed in order</text>
            <text x="862" y="396" class="label">Same changes, new base — one straight line of history.</text></svg>`
    },
    {
        title: "Merge conflict", tag: "Resolve a disagreement", label: "Both branches changed the same place",
        definition: "A <strong>merge conflict</strong> happens when Git cannot automatically combine overlapping edits. You inspect the competing versions, decide on the right result, and mark the conflict resolved.",
        consideration: "Conflicts are a normal part of collaboration. Read both changes in context rather than accepting one side by habit, then test the resolved file before continuing.",
        practice: "The conflict markers in a file separate the current branch, the incoming change, and the shared base when available.",
        command: "git status  ·  edit the file  ·  git add <file>", motion: "conflict",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">Resolve a merge conflict</title><desc id="scene-desc">Two conflicting versions are compared, and a resolved result is chosen.</desc>
            <text x="82" y="94" class="tiny">CURRENT BRANCH</text><text x="902" y="94" class="tiny">INCOMING CHANGE</text>
            <g data-side-a><rect x="80" y="116" width="620" height="200" rx="8" fill="#f7f4e3" stroke="#c65e45" stroke-width="3"/><text x="118" y="176" class="tiny">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</text><text x="118" y="248" class="strong">color: coral;</text></g>
            <g data-side-b><rect x="900" y="116" width="620" height="200" rx="8" fill="#f7f4e3" stroke="#477a89" stroke-width="3"/><text x="938" y="176" class="tiny">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</text><text x="938" y="248" class="strong">color: blue;</text></g>
            <path d="M726 216h130" class="line"/><path d="m848 204 15 12-15 12" class="tip-muted"/>
            <text x="730" y="184" class="tiny">you decide</text>
            <path d="M390 322v28h410v26" class="elbow" data-elbow/><path d="M1210 322v28H800v26" class="elbow" data-elbow/>
            <g data-resolution><rect x="500" y="376" width="600" height="112" rx="8" fill="#dce5d2" stroke="#537653" stroke-width="3"/><text x="536" y="422" class="tiny">RESOLVED VERSION</text><text x="536" y="464" class="strong">color: deep teal;</text></g></svg>`
    },
    {
        title: "Pull Request", tag: "Ask for a review", label: "A proposal to merge changes on GitHub",
        definition: "A <strong>pull request (PR)</strong> is a place to discuss, review, and check a branch before merging it into another. It connects your work to feedback and automated checks.",
        consideration: "A PR is a collaboration workflow, not a Git command. Keep it focused, explain why the change matters, and respond to review feedback before merging.",
        practice: "Open a PR from your topic branch to its intended base branch once your changes are pushed and ready to discuss.",
        command: "git push -u origin feature/search  ·  Open a PR", motion: "pr",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">A pull request moves through review</title><desc id="scene-desc">A feature branch enters review, passes checks, and is ready to merge into main.</desc>
            <text x="82" y="118" class="tiny">FEATURE BRANCH</text>
            <path d="M110 266h240" class="gold-line"/><circle cx="118" cy="266" r="18" class="gold-node"/><circle cx="234" cy="266" r="18" class="gold-node"/><circle cx="350" cy="266" r="18" class="gold-node"/>
            <path d="M396 266h92" class="motion-path" data-track/><path d="m480 254 15 12-15 12" class="tip"/>
            <g data-pr-card>
                <rect x="534" y="118" width="566" height="296" rx="10" class="panel"/>
                <text x="572" y="180" class="strong">Add search</text><text x="572" y="220" class="tiny">#24 · Open for review</text><path d="M572 248h490" class="rule"/>
                <g data-check><circle cx="590" cy="296" r="15" class="green-node"/><path d="m582 296 6 6 11-12" class="mark"/><text x="624" y="304" class="tiny">checks passed</text></g>
                <g data-check><circle cx="590" cy="356" r="15" class="gold-node"/><path d="m582 356 6 6 11-12" class="mark"/><text x="624" y="364" class="tiny">review approved</text></g>
            </g>
            <path d="M1146 266h96" class="line"/><path d="m1234 254 15 12-15 12" class="tip-muted"/>
            <text x="1150" y="234" class="tiny">merge</text>
            <g data-merge><circle cx="1340" cy="266" r="30" class="green-node"/><path d="m1325 266 11 12 21-24" class="mark"/></g>
            <text x="1400" y="276" class="strong">main</text></svg>`
    },
    {
        title: "Issue", tag: "Track a task", label: "A ticket for a bug, feature, or question",
        definition: "An <strong>issue</strong> is a unit of work tracked on a hosting platform such as GitHub. It can describe a bug, propose a feature, ask a question, or coordinate a task.",
        consideration: "A useful issue gives enough context to act: what happened or is needed, how to reproduce it when relevant, and what outcome would count as done.",
        practice: "Link branches and pull requests to issues so the discussion, implementation, and final change stay connected.",
        command: "Create an issue on GitHub  ·  Close it with a linked PR", motion: "issue",
        art: `<svg class="scene" viewBox="0 0 1600 520" role="img" aria-labelledby="scene-title scene-desc"><title id="scene-title">An issue moves from open to done</title><desc id="scene-desc">A task passes through open, in progress, and completed states.</desc>
            <path d="M300 290h1000" class="line" data-spine/>
            <g data-state><circle cx="300" cy="290" r="40" fill="#f4f1dc" stroke="#c65e45" stroke-width="5"/><circle cx="300" cy="290" r="13" fill="#c65e45"/><text x="252" y="384" class="strong">open</text><text x="238" y="418" class="tiny">issue #24</text></g>
            <g data-state><circle cx="800" cy="290" r="40" fill="#f4f1dc" stroke="#bd8b21" stroke-width="5"/><path d="M800 264v28l19 11" fill="none" stroke="#bd8b21" stroke-width="4" stroke-linecap="round"/><text x="716" y="384" class="strong">in progress</text><text x="724" y="418" class="tiny">branch started</text></g>
            <g data-state><circle cx="1300" cy="290" r="40" class="green-node" stroke-width="5"/><path d="m1280 290 13 14 25-28" class="mark"/><text x="1248" y="384" class="strong">closed</text><text x="1222" y="418" class="tiny">change merged</text></g>
            <path d="M300 182h1000" class="motion-path" data-track/>
            <text x="560" y="146" class="tiny">issue → branch → pull request → closed</text></svg>`
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
    button.innerHTML = `<span class="index-number">${String(position + 1).padStart(2, "0")}</span><span class="index-label">${concept.title}</span>`;
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
    index.children[activeIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    animateScene(concept.motion);
}

/* ---- Motion ----
   Scenes are wide, so each timeline reads as a short sequence: the stage
   assembles, the Git action travels across it, then the result lands. */
function animateScene(motion) {
    if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scene = fields.scene.querySelector("svg");
    if (!scene) return;
    const q = (selector) => scene.querySelector(selector);
    const all = (selector) => [...scene.querySelectorAll(selector)];
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
    currentTimeline = timeline;

    // Trace a path from one end to the other by animating its dash offset.
    const draw = (target, duration = .9, position = "<") => {
        const path = typeof target === "string" ? q(target) : target;
        if (!path || !path.getTotalLength) return timeline;
        const length = path.getTotalLength();
        const dash = path.getAttribute("stroke-dasharray");
        return timeline.fromTo(path,
            { strokeDasharray: length, strokeDashoffset: length },
            { strokeDashoffset: 0, duration, ease: "power2.inOut", onComplete: () => {
                if (dash) path.setAttribute("stroke-dasharray", dash); else path.style.strokeDasharray = "";
                path.style.strokeDashoffset = "";
            } }, position);
    };
    // Pop a node in from nothing, scaling around its own centre.
    const pop = (targets, stagger = .09, position = "<") => {
        const nodes = typeof targets === "string" ? all(targets) : targets;
        if (!nodes.length) return timeline;
        return timeline.from(nodes, { scale: 0, opacity: 0, duration: .45, stagger, ease: "back.out(2.4)", transformOrigin: "50% 50%" }, position);
    };
    // A ring that expands and fades, marking the moment something is recorded.
    const ping = (selector, position = "<") => {
        const ring = q(selector);
        if (!ring) return timeline;
        return timeline.fromTo(ring, { opacity: .85, scale: 1, transformOrigin: "50% 50%" }, { opacity: 0, scale: 2.1, duration: .9, ease: "power2.out" }, position);
    };

    switch (motion) {
        case "repo":
            timeline.from(all("[data-file]"), { x: -70, opacity: 0, duration: .55, stagger: .12 })
                .from(q("[data-panel]"), { opacity: 0, scaleX: .94, transformOrigin: "0% 50%", duration: .6 }, "-=.35");
            draw("[data-track]", .7, "-=.2");
            draw("[data-spine]", .8, "-=.35");
            pop("[data-node]", .1, "-=.5");
            timeline.from(q("[data-spark]"), { y: 26, opacity: 0, duration: .5 }, "-=.15");
            break;
        case "clone":
            timeline.from(q("[data-panel]"), { x: -50, opacity: 0, duration: .55 });
            draw("[data-spine]", .6, "-=.2");
            pop("[data-node]", .09, "-=.35");
            draw("[data-track]", .6, "-=.2");
            timeline.from(q("[data-machine]"), { x: 60, opacity: 0, duration: .6 }, "-=.45")
                .fromTo(q("[data-packet]"), { x: 0, opacity: 0 }, { x: 0, opacity: 1, duration: .25 }, "-=.2")
                .to(q("[data-packet]"), { x: 258, duration: 1.1, ease: "power1.inOut" })
                .to(q("[data-packet]"), { opacity: 0, scale: .6, transformOrigin: "50% 50%", duration: .3 }, "-=.05");
            break;
        case "branch":
            draw("[data-spine]", .9);
            pop("[data-main-node]", .11, "-=.65");
            draw("[data-branch-path]", 1.1, "-=.35");
            pop("[data-feature-node]", .13, "-=.6");
            timeline.from(q("[data-new-branch]"), { scale: 0, opacity: 0, transformOrigin: "50% 50%", duration: .5, ease: "back.out(3)" }, "-=.1")
                .to(q("[data-new-branch]"), { scale: 1.18, transformOrigin: "50% 50%", duration: .25, yoyo: true, repeat: 1 });
            break;
        case "commit":
            timeline.from(q("[data-staged]"), { x: -60, opacity: 0, duration: .55 });
            draw("[data-spine]", .8, "-=.2");
            pop("[data-node]", .1, "-=.5");
            draw("[data-track]", .6, "-=.3");
            timeline.from(q("[data-commit]"), { scale: 0, opacity: 0, transformOrigin: "50% 50%", duration: .55, ease: "back.out(2.8)" });
            ping("[data-pulse]", "-=.3");
            break;
        case "sync":
            timeline.from(all("[data-panel]"), { opacity: 0, y: 24, duration: .55, stagger: .14 })
                .fromTo(q("[data-push]"), { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: .6 })
                .to(q("[data-push]"), { x: 22, duration: .55, yoyo: true, repeat: 1, ease: "power1.inOut" })
                .fromTo(q("[data-pull]"), { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: .6 }, "-=.9")
                .to(q("[data-pull]"), { x: -22, duration: .55, yoyo: true, repeat: 1, ease: "power1.inOut" }, "-=.55");
            break;
        case "diff":
            timeline.from(all("[data-panel]"), { opacity: 0, y: 22, duration: .5, stagger: .12 })
                .from(q("[data-removed]"), { scaleX: 0, opacity: 0, transformOrigin: "0% 50%", duration: .5 })
                .to(q("[data-removed]"), { opacity: .35, duration: .3, yoyo: true, repeat: 1 })
                .from(q("[data-added]"), { scaleX: 0, opacity: 0, transformOrigin: "0% 50%", duration: .5 }, "-=.45")
                .to(q("[data-added]"), { opacity: .35, duration: .3, yoyo: true, repeat: 1 }, "-=.3");
            break;
        case "merge":
            draw("[data-spine]", .9);
            pop("[data-main-node]", .1, "-=.65");
            draw("[data-branch-path]", 1.3, "-=.3");
            pop("[data-feature-node]", .12, "-=.9");
            timeline.from(q("[data-merge]"), { scale: 0, opacity: 0, transformOrigin: "50% 50%", duration: .55, ease: "back.out(2.8)" }, "-=.1");
            ping("[data-pulse]", "-=.3");
            break;
        case "rebase":
            timeline.from(q("[data-feature-old]"), { opacity: 0, y: 30, duration: .5 });
            draw("[data-track]", .6, "-=.1");
            timeline.to(q("[data-feature-old]"), { opacity: .2, duration: .5, ease: "power1.inOut" }, "-=.1")
                .from(q("[data-feature-new]"), { opacity: 0, duration: .3 }, "-=.3")
                .from(all("[data-replayed]"), { y: 180, scale: .4, opacity: 0, transformOrigin: "50% 50%", duration: .6, stagger: .16, ease: "back.out(1.9)" }, "-=.2");
            break;
        case "conflict":
            timeline.from(q("[data-side-a]"), { x: -48, opacity: 0, duration: .5 })
                .from(q("[data-side-b]"), { x: 48, opacity: 0, duration: .5 }, "-=.4")
                .to(q("[data-side-a]"), { opacity: .4, duration: .32, yoyo: true, repeat: 1 }, "-=.1")
                .to(q("[data-side-b]"), { opacity: .4, duration: .32, yoyo: true, repeat: 1 }, "-=.32");
            all("[data-elbow]").forEach((elbow, position) => draw(elbow, .55, position ? "<" : "-=.1"));
            timeline.from(q("[data-resolution]"), { y: 34, opacity: 0, duration: .55, ease: "back.out(1.7)" }, "-=.1");
            break;
        case "pr":
            draw("[data-track]", .5);
            timeline.from(q("[data-pr-card]"), { y: 40, opacity: 0, duration: .6 }, "-=.2")
                .from(all("[data-check]"), { x: -26, opacity: 0, duration: .45, stagger: .22 }, "-=.15")
                .from(q("[data-merge]"), { scale: 0, opacity: 0, transformOrigin: "50% 50%", duration: .5, ease: "back.out(2.6)" }, "-=.1");
            break;
        case "issue":
            draw("[data-spine]", 1.1);
            timeline.from(all("[data-state]"), { scale: .4, opacity: 0, transformOrigin: "50% 50%", duration: .55, stagger: .3, ease: "back.out(2)" }, "-=.95");
            draw("[data-track]", 1, "-=.4");
            break;
    }
}

const step = (delta) => showConcept(activeIndex + delta);
["#previous", "#previous-foot"].forEach((id) => document.querySelector(id)?.addEventListener("click", () => step(-1)));
["#next", "#next-foot"].forEach((id) => document.querySelector(id)?.addEventListener("click", () => step(1)));
document.querySelector("#replay").addEventListener("click", () => showConcept(activeIndex));
document.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "ArrowLeft") step(-1);
    if (event.altKey && event.key === "ArrowRight") step(1);
});
showConcept(0);
