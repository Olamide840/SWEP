const questions = [
    {
      question: "What does ransomware do?",
      options: [
        "Steals your identity",
        "Encrypts your files and demands payment",
        "Deletes system files",
        "Installs a firewall"
      ],
      answer: 1
    },
    {
      question: "What was the name of the 2017 global ransomware attack?",
      options: [
        "WannaCry",
        "Petya",
        "Zeus",
        "CodeRed"
      ],
      answer: 0
    },
    {
      question: "Which vulnerability did WannaCry exploit?",
      options: [
        "EternalBlue in Windows",
        "Heartbleed in SSL",
        "Shellshock in Bash",
        "Stagefright in Android"
      ],
      answer: 0
    },
    {
      question: "What file action is performed by ransomware?",
      options: [
        "Compression",
        "Encryption",
        "Decryption",
        "Defragmentation"
      ],
      answer: 1
    },
    {
      question: "How is ransomware usually spread?",
      options: [
        "Social media posts",
        "Infected USB devices",
        "Phishing emails and malicious links",
        "Mobile app stores"
      ],
      answer: 2
    },
    {
      question: "What payment method do attackers commonly demand?",
      options: [
        "Credit card",
        "Bank transfer",
        "Cryptocurrency (e.g., Bitcoin)",
        "Cash on delivery"
      ],
      answer: 2
    },
    {
      question: "Which of the following helps prevent ransomware attacks?",
      options: [
        "Ignoring software updates",
        "Clicking unknown links",
        "Regularly backing up files",
        "Using public Wi-Fi"
      ],
      answer: 2
    },
    {
      question: "What is the main goal of ransomware attackers?",
      options: [
        "To gain media attention",
        "To educate users",
        "To extort money",
        "To delete operating systems"
      ],
      answer: 2
    },
    {
      question: "Which sector was heavily impacted by WannaCry?",
      options: [
        "Gaming industry",
        "Healthcare (e.g., NHS in the UK)",
        "Agriculture",
        "Aviation"
      ],
      answer: 1
    },
    {
      question: "Which of these is NOT a known ransomware family?",
      options: [
        "Locky",
        "REvil",
        "TrickBot",
        "CryptoLocker"
      ],
      answer: 2
    },
    {
      question: "How can businesses reduce ransomware risks?",
      options: [
        "Disable firewalls",
        "Ignore backups",
        "Train employees and patch systems",
        "Use public computers"
      ],
      answer: 2
    },
    {
      question: "What’s the best immediate response to a ransomware infection?",
      options: [
        "Pay the ransom",
        "Shut down the infected system and isolate it",
        "Ignore it",
        "Try to uninstall the OS"
      ],
      answer: 1
    },
    {
      question: "What does 'double extortion' mean in ransomware?",
      options: [
        "The ransomware replicates itself",
        "Attackers threaten to leak data even after payment",
        "Victims are asked to pay twice",
        "The system crashes twice"
      ],
      answer: 1
    },
    {
      question: "Which of the following is a safe practice?",
      options: [
        "Using outdated antivirus software",
        "Backing up your data regularly",
        "Ignoring system alerts",
        "Clicking unknown links"
      ],
      answer: 1
    },
    {
      question: "Why is paying the ransom not recommended?",
      options: [
        "It guarantees your files will be restored",
        "It funds more attacks and doesn’t guarantee file return",
        "It’s illegal in all countries",
        "It blocks future updates"
      ],
      answer: 1
    },
    {
      question: "Which of the following is a common symptom of ransomware?",
      options: [
        "Speed boost in system performance",
        "Random rebooting",
        "Files becoming inaccessible or encrypted",
        "Pop-up ads in browsers"
      ],
      answer: 2
    },
    {
      question: "Which software update policy is best for ransomware prevention?",
      options: [
        "Update only when there's a problem",
        "Never update",
        "Install updates as soon as they are available",
        "Disable updates"
      ],
      answer: 2
    },
    {
      question: "Who are common targets for ransomware?",
      options: [
        "Only big tech companies",
        "Only government agencies",
        "Individual or organization",
        "Only hospitals"
      ],
      answer: 2
    },
    {
      question: "Which type of backup is safest against ransomware?",
      options: [
        "Cloud backup with strong authentication",
        "Local backup on the same device",
        "Backing up to a friend’s computer",
        "No backup at all"
      ],
      answer: 0
    },
    {
      question: "How often should you backup your data?",
      options: [
        "Once a year",
        "Weekly or daily",
        "Once every 5 years",
        "Never"
      ],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
      let score = 0;
      
      function loadQuestion() {
        const q = questions[currentQuestion];
        document.getElementById("question").textContent = `Q${currentQuestion + 1}: ${q.question}`;
      
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
      
        q.options.forEach((opt, i) => {
          const btn = document.createElement("button");
          btn.textContent = opt;
          btn.onclick = () => selectAnswer(i);
          btn.className = "option-btn";
          optionsDiv.appendChild(btn);
        });
      }
      
      function selectAnswer(selected) {
        const correct = questions[currentQuestion].answer;
        const buttons = document.querySelectorAll(".option-btn");
      
        buttons.forEach((btn, idx) => {
          btn.disabled = true;
          if (idx === correct) btn.style.backgroundColor = "green";
          if (idx === selected && idx !== correct) btn.style.backgroundColor = "red";
        });
      
        if (selected === correct) score++;
      }
      
      function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          loadQuestion();
        } else {
          endQuiz();
        }
      }
      
      function endQuiz() {
        document.getElementById("quiz-box").style.display = "none";
        document.getElementById("result-box").style.display = "block";
      
        const percent = Math.round((score / questions.length) * 100);
        document.getElementById("score").textContent = `You got ${score} out of ${questions.length} (${percent}%)`;
      
        localStorage.setItem("ransomeScore", score);
      }
      
      function goHome() {
        window.location.href = "home_page.html";
      }
      
      window.onload = loadQuestion;
      