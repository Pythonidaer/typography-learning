'use strict';
const roadmapGroups = [
  {
    "id": "purpose",
    "title": "Identify the purpose",
    "definition": "Set the job of the text before selecting its appearance.",
    "example": "A portfolio needs visitors to find projects and understand your contribution.",
    "exercise": "Write a one-sentence goal for your portfolio and identify its most important text.",
    "url": "../choosing-type.html#purpose",
    "linkLabel": "Read this section in Choosing type",
    "terms": [
      {
        "id": "reading-task",
        "title": "Reading task",
        "definition": "Separate text people scan from text they read closely. The same screen can require both.",
        "example": "A project name is scanned; the explanation of a difficult technical decision needs sustained reading.",
        "exercise": "List five pieces of text from a project page. Mark each as scan, read, or act.",
        "url": "../vocabulary.html#readability",
        "linkLabel": "Review readability"
      },
      {
        "id": "text-roles",
        "title": "Text roles",
        "definition": "Assign a purpose to each text style so visual differences communicate structure.",
        "example": "Project title, section heading, body text, image caption, and action label have different jobs.",
        "exercise": "Write one real example for each role. Rank their importance before choosing sizes.",
        "url": "../vocabulary.html#hierarchy",
        "linkLabel": "Review hierarchy"
      },
      {
        "id": "tone-and-context",
        "title": "Tone and context",
        "definition": "Choose an intended character, then check that the lettering supports it without obscuring meaning.",
        "example": "An original fantasy heading can set the scene while a quieter paragraph face explains your work.",
        "exercise": "Choose two tone words and one tone to avoid. Compare a heading against each word.",
        "url": "https://design.google/library/choosing-web-fonts-beginners-guide",
        "linkLabel": "Read Google’s font-selection guide"
      },
      {
        "id": "content-first",
        "title": "Real content",
        "definition": "Use your actual words when judging a typeface; specimen alphabets hide layout problems.",
        "example": "A long project title, a price, a date, and a code identifier reveal different constraints.",
        "exercise": "Prepare a sample containing your longest title, a paragraph, a button label, and numbers.",
        "url": "https://web.dev/learn/design/typography",
        "linkLabel": "Read web.dev’s typography lesson"
      }
    ]
  },
  {
    "id": "audience",
    "title": "Identify the audience",
    "definition": "Understand who will read the text and under what conditions.",
    "example": "A recruiter may scan your portfolio on a phone before opening a detailed case study.",
    "exercise": "Describe one reader, their task, device, and likely reading conditions.",
    "url": "../choosing-type.html#audience",
    "linkLabel": "Read this section in Choosing type",
    "terms": [
      {
        "id": "reader-needs",
        "title": "Reader needs",
        "definition": "Make choices around actual reading needs rather than assuming everyone reads as you do.",
        "example": "A dense decorative label may slow someone unfamiliar with the subject.",
        "exercise": "Ask another person to find your project role and outcome. Note where they hesitate.",
        "url": "../vocabulary.html#readability",
        "linkLabel": "Review readability"
      },
      {
        "id": "character-clarity",
        "title": "Character clarity",
        "definition": "Check whether similar-looking characters remain distinguishable in the actual interface.",
        "example": "Compare I, l, 1, O, and 0 in a project ID or contact detail.",
        "exercise": "Set “Il1 O0 rn m” in three candidates at your planned small-text size.",
        "url": "../vocabulary.html#legibility",
        "linkLabel": "Review legibility"
      },
      {
        "id": "language-and-symbols",
        "title": "Language and symbols",
        "definition": "Verify the characters your content requires, including names, punctuation, and relevant scripts.",
        "example": "A résumé may include accented names, curly apostrophes, currency symbols, and technical notation.",
        "exercise": "Create a required-character sample and check that every candidate renders it consistently.",
        "url": "../vocabulary.html#subset",
        "linkLabel": "Review subsets"
      },
      {
        "id": "reading-conditions",
        "title": "Reading conditions",
        "definition": "Evaluate text in the contexts where people will use it, including narrow screens and enlarged text.",
        "example": "A navigation label that fits on desktop may wrap awkwardly on a phone.",
        "exercise": "Read your sample on a phone and with browser text enlarged. Record one issue to fix.",
        "url": "https://web.dev/learn/design/typography",
        "linkLabel": "Read responsive typography guidance"
      }
    ]
  },
  {
    "id": "inspiration",
    "title": "Look for inspiration",
    "definition": "Collect examples and identify the decisions worth testing.",
    "example": "Two portfolios can use the same family yet feel different because of spacing and hierarchy.",
    "exercise": "Collect three references and describe one useful decision in each.",
    "url": "../choosing-type.html#inspiration",
    "linkLabel": "Read this section in Choosing type",
    "terms": [
      {
        "id": "reference-analysis",
        "title": "Analyze references",
        "definition": "Study the relationships between elements rather than copying a font name without its context.",
        "example": "A large heading may work because the rest of the page is restrained and aligned.",
        "exercise": "For each reference, describe heading scale, paragraph width, weight contrast, and alignment.",
        "url": "../vocabulary.html#hierarchy",
        "linkLabel": "Review hierarchy"
      },
      {
        "id": "candidate-shortlist",
        "title": "Candidate shortlist",
        "definition": "Keep a small comparison set so each candidate receives a meaningful trial.",
        "example": "Three families tested with identical content are easier to judge than dozens of tiny previews.",
        "exercise": "Choose three candidates in the font library and compare the same paragraph.",
        "url": "../index.html#catalogue",
        "linkLabel": "Compare fonts in the library"
      },
      {
        "id": "pairing-study",
        "title": "Study pairings",
        "definition": "Identify what connects two typefaces and what separates their roles.",
        "example": "A restrained body face can accompany an expressive heading without competing with it.",
        "exercise": "Compare one-family and two-family versions of the same page. Explain whether the second family helps.",
        "url": "https://www.nngroup.com/articles/pairing-typefaces/",
        "linkLabel": "Read about pairing typefaces"
      },
      {
        "id": "selection-criteria",
        "title": "Selection criteria",
        "definition": "Turn observations into criteria you can use to accept or reject candidates.",
        "example": "A narrow heading face may fit a title, but its thin strokes might disappear at small sizes.",
        "exercise": "Write three must-haves and one preference. Use them to narrow your shortlist.",
        "url": "https://design.google/library/choosing-web-fonts-beginners-guide",
        "linkLabel": "Read Google’s font-selection guide"
      }
    ]
  },
  {
    "id": "selection",
    "title": "Choose the fonts",
    "definition": "Compare candidates in their intended roles before committing.",
    "example": "A face that works for a six-word heading may struggle in a long case study.",
    "exercise": "Select a heading and body treatment, and give one practical reason for each.",
    "url": "../choosing-type.html#selection",
    "linkLabel": "Read this section in Choosing type",
    "terms": [
      {
        "id": "body-and-display",
        "title": "Body and display",
        "definition": "Evaluate expressive lettering and continuous text separately; their demands differ.",
        "example": "An ornate title can establish atmosphere while straightforward body text carries project details.",
        "exercise": "Put a candidate in a heading and a paragraph. Decide where its details help or hinder.",
        "url": "../vocabulary.html#display",
        "linkLabel": "Review display type"
      },
      {
        "id": "weights-and-styles",
        "title": "Weights and styles",
        "definition": "Confirm the family contains the actual weights and italics your interface needs.",
        "example": "A case study may need regular paragraphs, emphasized words, and stronger section headings.",
        "exercise": "Check your chosen family’s available faces, then assign a real face to each role.",
        "url": "../vocabulary.html#font-face",
        "linkLabel": "Review font faces"
      },
      {
        "id": "pairing-and-contrast",
        "title": "Pairing and contrast",
        "definition": "Build clear differences between roles without introducing unnecessary competing voices.",
        "example": "One family can distinguish a heading from body text through size and weight.",
        "exercise": "Try one family first. Add another only if you can describe the role it improves.",
        "url": "https://www.nngroup.com/articles/pairing-typefaces/",
        "linkLabel": "Read about pairing typefaces"
      },
      {
        "id": "license-and-fallback",
        "title": "License and fallback",
        "definition": "Check web-use permission and plan how the page behaves when the preferred font is unavailable.",
        "example": "A downloaded font may have different permissions from a webfont; fallback metrics can change wrapping.",
        "exercise": "Record the font’s license and test the page with its webfont request blocked.",
        "url": "../vocabulary.html#fallback-font",
        "linkLabel": "Review fallback fonts"
      }
    ]
  },
  {
    "id": "sizing",
    "title": "Determine the sizes",
    "definition": "Establish a hierarchy that works with the selected fonts.",
    "example": "A project title, section title, paragraph, and caption need a clear relationship.",
    "exercise": "Create a small set of sizes and test it on a real project page.",
    "url": "../choosing-type.html#sizing",
    "linkLabel": "Read this section in Choosing type",
    "terms": [
      {
        "id": "starting-size",
        "title": "Starting size",
        "definition": "Choose a comfortable body-text setting in context instead of relying on the font-size number alone.",
        "example": "Two families at the same CSS size can appear noticeably different in height and density.",
        "exercise": "Compare two body faces at the same size, then adjust each for comfortable reading.",
        "url": "../vocabulary.html#font-size",
        "linkLabel": "Review font size"
      },
      {
        "id": "type-scale",
        "title": "Type scale",
        "definition": "Use a size relationship as a starting point, then adjust it to fit content and hierarchy.",
        "example": "Starting at 16px with a 1.25 ratio produces 20px, 25px, and 31.25px; these are options to test.",
        "exercise": "Calculate four sizes from your chosen base and ratio. Reject any that cause poor wrapping.",
        "url": "https://web.dev/learn/design/typography",
        "linkLabel": "Read web.dev’s typography lesson"
      },
      {
        "id": "spacing-and-measure",
        "title": "Spacing and measure",
        "definition": "Judge paragraph width and line spacing together with the selected face and size.",
        "example": "A compact paragraph and a very wide paragraph can both feel tiring for different reasons.",
        "exercise": "Keep the font fixed. Change only paragraph width, then only line height, and compare.",
        "url": "../vocabulary.html#measure-line-length",
        "linkLabel": "Review line length"
      },
      {
        "id": "responsive-hierarchy",
        "title": "Responsive hierarchy",
        "definition": "Keep roles recognizable when the viewport or text size changes.",
        "example": "A large desktop title may need a smaller mobile setting, while body text still needs to remain readable.",
        "exercise": "Test the longest heading and a paragraph at phone and desktop widths and enlarged text.",
        "url": "https://web.dev/learn/design/typography",
        "linkLabel": "Read responsive typography guidance"
      }
    ]
  },
  {
    "id": "type-guide",
    "title": "Create a type guide",
    "definition": "Record the decisions so they can be applied consistently.",
    "example": "A type guide connects heading, paragraph, caption, and action styles to actual examples.",
    "exercise": "Write a short guide that someone else could use to reproduce your text styles.",
    "url": "../choosing-type.html#type-guide",
    "linkLabel": "Read this section in Choosing type",
    "terms": [
      {
        "id": "role-specifications",
        "title": "Role specifications",
        "definition": "Define each role with enough detail to reproduce it in a component.",
        "example": "A body style includes family, fallback, size, weight, line height, and text color.",
        "exercise": "Document those properties for a title, paragraph, caption, and button label.",
        "url": "../vocabulary.html#typography",
        "linkLabel": "Review typography"
      },
      {
        "id": "usage-examples",
        "title": "Usage examples",
        "definition": "Show where a style belongs and where a different treatment is required.",
        "example": "A decorative heading belongs above a project; it may be unsuitable for a long error message.",
        "exercise": "Create one correct-use example and one misuse example for your most expressive face.",
        "url": "../vocabulary.html#display",
        "linkLabel": "Review display type"
      },
      {
        "id": "browser-check",
        "title": "Browser check",
        "definition": "Validate the guide against the real page rather than only a design mockup.",
        "example": "Font loading, fallback text, long labels, and zoom can alter the final layout.",
        "exercise": "Check keyboard focus, text enlargement, font loading, and the longest labels in your page.",
        "url": "https://web.dev/learn/design/typography",
        "linkLabel": "Read web typography guidance"
      },
      {
        "id": "explain-the-choice",
        "title": "Explain the choice",
        "definition": "Make a concise rationale connecting your font decisions to the project’s needs.",
        "example": "“The heading establishes a fantasy setting; the body face makes detailed case studies easier to scan.”",
        "exercise": "Write a short rationale using your goal, audience, chosen roles, and one test result.",
        "url": "../index.html#catalogue",
        "linkLabel": "Try your choices in the library"
      }
    ]
  }
];
