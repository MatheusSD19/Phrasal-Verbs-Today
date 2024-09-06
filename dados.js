let dados = [
        {
            title: "Break Down",
            description: "To stop functioning; to malfunction.",
            example: "Example: My car broke down on the way to work.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/break-down"
        },
        {
            title: "Look forward to",
            description: "To anticipate with pleasure",
            example: "Example: I'm looking forward to the weekend.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-forward-to"
        },
        {
            title: "Come across",
            description: "To find something by chance",
            example: "Example: I came across an old photo album.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/come-across"
        },
        {
            title: "Go on",
            description: "To continue",
            example: "Example: Please go on with your story.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/go-on"
        },
        {
            title: "Hello World!",
            description: "",
            example: "",
            link: "https://pt.wikipedia.org/wiki/Programa_Olá_Mundo"
        },
        {
            title: "Get over",
            description: "To recover from an illness or disappointment",
            example: "Example: It took her a long time to get over the breakup.",
            link: "https://dictionary.cambridge.com/pt/dicionario/ingles-portugues/get-over"
        },
        {
            title: "Put up with",
            description: "To tolerate something unpleasant",
            example: "Example: I can't put up with his noise anymore.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/put-up-with"
        },
        {
            title: "Carry on",
            description: "To continue doing something",
            example: "Example: Despite the difficulties, they carried on.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/carry-on"
        },
        {
            title: "Make up",
            description: "To become friends again after an argument",
            example: "Example: They had a fight, but they made up the next day.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/make-up"
        },
        {
            title: "Turn up",
            description: "To arrive unexpectedly",
            example: "Example: She turned up at my door without warning.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-up"
        },
        {
            title: "Call off",
            description: "To cancel something",
            example: "Example: The game was called off due to the rain.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/call-off"
        },
        {
            title: "Give up",
            description: "To stop trying",
            example: "Example: I'm going to give up smoking.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/give-up"
        },
        {
            title: "Figure out",
            description: "To understand something",
            example: "Example: I can't figure out how to use this app.",
            link: "https://dictionary.cambridge.com/pt/dicionario/ingles-portugues/figure-out"
        },
        {
            title: "Pick up",
            description: "To learn something new easily",
            example: "Example: She picked up Spanish very quickly.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/pick-up"
        },
        {
            title: "Catch up on",
            description: "To do something you haven't had time to do before",
            example: "I need to catch up on some sleep.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/catch-up-on"
        },
        {
            title: "Get along with",
            description: "To have a good relationship with someone",
            example: "I get along with my coworkers very well.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/get-along-with"
        },
        {
            title: "Look up to",
            description: "To admire and respect someone",
            example: "She looks up to her older sister.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-up-to"
        },
        {
            title: "Put off",
            description: "To delay doing something",
            example: "I keep putting off doing my homework.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/put-off"
        },
        {
            title: "Take after",
            description: "To resemble a parent or other family member",
            example: "She takes after her mother.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/take-after"
        },
        {
            title: "Turn down",
            description: "To refuse an offer",
            example: "He turned down the job offer.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-down"
        },
        {
            title: "Figure out",
            description: "To understand something",
            example: "I can't figure out how to use this app.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/figure-out"
        },
        {
            title: "Give up",
            description: "To stop trying",
            example: "I'm going to give up smoking.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/give-up"
        },
        {
            title: "Get up",
            description: "To rise from bed",
            example: "I usually get up at 7 am.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/get-up"
        },
        {
            title: "Go out",
            description: "To leave home to go to a social event",
            example: "We're going out for dinner tonight.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/go-out"
        },
        {
            title: "Come back",
            description: "To return to a place",
            example: "I'll come back later.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/come-back"
        },
        {
            title: "Turn on",
            description: "To switch on a device",
            example: "Turn on the TV, please.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-on"
        },
        {
            title: "Turn off",
            description: "To switch off a device",
            example: "Don't forget to turn off the lights.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-off"
        },
        {
            title: "Look after",
            description: "To take care of someone or something",
            example: "Can you look after my cat while I'm away?",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-after"
        },
        {
            title: "Cheer up",
            description: "To become happier",
            example: "Cheer up! Things will get better.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/cheer-up"
        },
        {
            title: "Calm down",
            description: "To become less angry or excited",
            example: "Calm down, there's no need to get upset.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/calm-down"
        },
        {
            title: "Look down on",
            description: "To think that you are better than someone else",
            example: "He looks down on people who don't have as much money as him.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-down-on"
        },
        {
            title: "Feel up to",
            description: "To have enough energy or enthusiasm to do something",
            example: "I don't feel up to going out tonight.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/feel-up-to"
        },
        {
            title: "Carry out",
            description: "To perform a task or complete a plan",
            example: "Scientists are carrying out experiments to find a cure.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/carry-out"
        },
        {
            title: "Come across",
            description: "To find something by chance",
            example: "I came across an old photo album.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/come-across"
        },
        {
            title: "Drop by",
            description: "To visit someone informally",
            example: "I'll drop by your place later.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/drop-by"
        },
        {
            title: "Fill in",
            description: "To complete a form or document",
            example: "Please fill in this form.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/fill-in"
        },
        {
            title: "Give in",
            description: "To surrender or stop resisting",
            example: "I finally gave in and bought the new phone.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/give-in"
        },
        {
            title: "Go through",
            description: "To experience a difficult period",
            example: "She's going through a tough time right now.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/go-through"
        },
        {
            title: "Hang out",
            description: "To spend time relaxing with friends",
            example: "I like to hang out with my friends on weekends.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/hang-out"
        },
        {
            title: "Look into",
            description: "To investigate something",
            example: "I'm looking into buying a new car.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-into"
        },
        {
            title: "Make up",
            description: "To invent a story",
            example: "He made up an excuse for being late.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/make-up"
        },
        {
            title: "Run out of",
            description: "To have no more of something",
            example: "We've run out of milk.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/run-out-of"
        },
        {
            title: "Pick on",
            description: "To tease or bully someone",
            example: "It's not nice to pick on the smaller kids.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/pick-on"
        },
        {
            title: "Put away",
            description: "To store something in its proper place",
            example: "Please put away your toys.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/put-away"
        },
        {
            title: "Run into",
            description: "To meet someone unexpectedly",
            example: "I ran into an old friend at the mall.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/run-into"
        },
        {
            title: "Show up",
            description: "To arrive at a place",
            example: "He didn't show up for the meeting.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/show-up"
        },
        {
            title: "Take off",
            description: "To remove clothing",
            example: "Take off your coat, it's hot in here.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/take-off"
        },
        {
            title: "Think over",
            description: "To consider something carefully",
            example: "I need some time to think over your offer.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/think-over"
        },
        {
            title: "Try on",
            description: "To put on a piece of clothing to see if it fits",
            example: "Can I try on this shirt?",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/try-on"
        },
        {
            title: "Turn up",
            description: "To increase the volume or intensity of something",
            example: "Turn up the music, please.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-up"
        },
        {
            title: "Use up",
            description: "To finish a supply of something",
            example: "We've used up all the milk.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/use-up"
        },
        {
            title: "Work out",
            description: "To exercise",
            example: "I work out at the gym three times a week.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/work-out"
        },
        {
            title: "Get by",
            description: "To manage to survive or make a living with limited resources",
            example: "It's not easy to get by on a small salary.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/get-by"
        },
        {
            title: "Break in",
            description: "To enter a building by force, usually to steal something",
            example: "Someone tried to break in last night.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/break-in"
        },
        {
            title: "Break up",
            description: "To end a relationship",
            example: "They decided to break up after three years together.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/break-up"
        },
        {
            title: "Set up",
            description: "To arrange or establish something",
            example: "They set up a new company last year.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/set-up"
        },
        {
            title: "Back up",
            description: "To support or assist someone",
            example: "I'll back you up if anyone questions your decision.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/back-up"
        },
        {
            title: "Blow up",
            description: "To explode or to become very angry",
            example: "The car blew up after the crash.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/blow-up"
        },
        {
            title: "Bring up",
            description: "To raise a child or to mention a topic",
            example: "He was brought up in a small village.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/bring-up"
        },
        {
            title: "Call up",
            description: "To telephone someone",
            example: "I'll call you up later.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/call-up"
        },
        {
            title: "Cut down on",
            description: "To reduce the amount of something",
            example: "I'm trying to cut down on sugar.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/cut-down-on"
        },
        {
            title: "Fall apart",
            description: "To break into pieces or to lose control emotionally",
            example: "The book is so old that it's falling apart.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/fall-apart"
        },
        {
            title: "Get away",
            description: "To escape or leave a place",
            example: "The thief managed to get away before the police arrived.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/get-away"
        },
        {
            title: "Give away",
            description: "To give something for free or reveal a secret",
            example: "She decided to give away all her old clothes.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/give-away"
        },
        {
            title: "Hold on",
            description: "To wait or grasp tightly",
            example: "Hold on, I'll be right back.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/hold-on"
        },
        {
            title: "Let down",
            description: "To disappoint someone",
            example: "I promised to help, so I won't let you down.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/let-down"
        },
        {
            title: "Look out",
            description: "To be careful or watchful",
            example: "Look out! There's a car coming.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-out"
        },
        {
            title: "Put out",
            description: "To extinguish something (like a fire)",
            example: "The firefighters put out the fire quickly.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/put-out"
        },
        {
            title: "Run into",
            description: "To encounter someone by chance",
            example: "I ran into an old friend at the market.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/run-into"
        },
        {
            title: "Show off",
            description: "To display something or oneself in a proud way",
            example: "He likes to show off his new car.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/show-off"
        },
        {
            title: "Stand up for",
            description: "To defend or support something or someone",
            example: "You have to stand up for your beliefs.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/stand-up-for"
        },
        {
            title: "Take on",
            description: "To accept a challenge or responsibility",
            example: "She's taking on more work to save money.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/take-on"
        },
        {
            title: "Turn in",
            description: "To go to bed or submit something",
            example: "I think I'll turn in early tonight.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-in"
        },
        {
            title: "Work out",
            description: "To solve a problem or exercise",
            example: "They worked out a solution to the issue.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/work-out"
        },
        {
            title: "Back down",
            description: "To withdraw from a position or argument",
            example: "He refused to back down, even when he knew he was wrong.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/back-down"
        },
        {
            title: "Cut off",
            description: "To stop the supply of something or interrupt someone",
            example: "They cut off the electricity due to non-payment.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/cut-off"
        },
        {
            title: "Drop off",
            description: "To deliver someone or something to a place",
            example: "I need to drop off these documents at the office.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/drop-off"
        },
        {
            title: "End up",
            description: "To eventually reach or do something",
            example: "We ended up going to the park instead of the museum.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/end-up"
        },
        {
            title: "Fall for",
            description: "To be deceived or to develop romantic feelings",
            example: "I can't believe you fell for that trick.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/fall-for"
        },
        {
            title: "Give out",
            description: "To distribute or to stop working",
            example: "The teacher gave out the test papers.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/give-out"
        },
        {
            title: "Hold up",
            description: "To delay or to rob using threats",
            example: "The flight was held up due to bad weather.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/hold-up"
        },
        {
            title: "Look back on",
            description: "To remember and reflect on the past",
            example: "He likes to look back on his childhood memories.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-back-on"
        },
        {
            title: "Pass away",
            description: "To die",
            example: "Her grandfather passed away last year.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/pass-away"
        },
        {
            title: "Set up",
            description: "To establish or arrange something",
            example: "They set up a new company last month.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/set-up"
        },
        {
            title: "Show off",
            description: "To behave in a way to attract attention",
            example: "He always shows off when he gets a chance.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/show-off"
        },
        {
            title: "Take over",
            description: "To gain control or responsibility for something",
            example: "She took over the project after he left.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/take-over"
        },
        {
            title: "Turn around",
            description: "To change direction or make something successful",
            example: "The company managed to turn around its declining sales.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-around"
        },
        {
            title: "Wind up",
            description: "To end up in a situation or to close a business",
            example: "He wound up in hospital after the accident.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/wind-up"
        },
        {
            title: "Zoom in on",
            description: "To focus on something closely",
            example: "Let's zoom in on the details of the project.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/zoom-in-on"
        },
        {
            title: "Break into",
            description: "To enter a place illegally or to begin a new activity",
            example: "Thieves broke into the house last night.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/break-into"
        },
        {
            title: "Call up",
            description: "To telephone someone",
            example: "I'll call up my friend to check if she's coming.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/call-up"
        },
        {
            title: "Cut back on",
            description: "To reduce the amount of something",
            example: "The company is cutting back on expenses.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/cut-back-on"
        },
        {
            title: "Drop out",
            description: "To quit or leave something before completion",
            example: "He dropped out of school to pursue his career.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/drop-out"
        },
        {
            title: "Get by",
            description: "To manage or survive with what you have",
            example: "It's hard to get by on such a small salary.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/get-by"
        },
        {
            title: "Give in",
            description: "To surrender or accept defeat",
            example: "He finally gave in to their demands.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/give-in"
        },
        {
            title: "Go off",
            description: "To explode, or to stop working",
            example: "The bomb could go off at any moment.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/go-off"
        },
        {
            title: "Keep up with",
            description: "To stay at the same level or pace",
            example: "It's hard to keep up with all these changes.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/keep-up-with"
        },
        {
            title: "Look up",
            description: "To search for information or improve",
            example: "I need to look up the word in the dictionary.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/look-up"
        },
        {
            title: "Make out",
            description: "To decipher or understand something",
            example: "I can't make out what she's saying.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/make-out"
        },
        {
            title: "Put off",
            description: "To delay something to a later time",
            example: "We had to put off the meeting until next week.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/put-off"
        },
        {
            title: "Take after",
            description: "To resemble a family member in appearance or character",
            example: "She takes after her father in looks.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/take-after"
        },
        {
            title: "Talk into",
            description: "To persuade someone to do something",
            example: "I managed to talk him into coming with us.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/talk-into"
        },
        {
            title: "Back out",
            description: "To decide not to do something previously agreed upon",
            example: "He backed out of the deal at the last moment.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/back-out"
        },
        {
            title: "Blow up",
            description: "To explode or to become very angry",
            example: "The bomb blew up in the city center.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/blow-up"
        },
        {
            title: "Bring up",
            description: "To raise a topic for discussion or to care for a child until it is grown",
            example: "She brought up an interesting point during the meeting.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/bring-up"
        },
        {
            title: "Brush up on",
            description: "To improve your knowledge or skill in something",
            example: "I need to brush up on my Spanish before the trip.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/brush-up-on"
        },
        {
            title: "Check in",
            description: "To register at a hotel or airport",
            example: "We need to check in at least two hours before the flight.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/check-in"
        },
        {
            title: "Check out",
            description: "To pay and leave a hotel or to look at something interesting",
            example: "Let's check out the new restaurant in town.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/check-out"
        },
        {
            title: "Come up with",
            description: "To think of an idea or plan",
            example: "She came up with a brilliant solution to the problem.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/come-up-with"
        },
        {
            title: "Cut out",
            description: "To remove something by cutting or to stop doing something",
            example: "Cut out the unhealthy snacks if you want to lose weight.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/cut-out"
        },
        {
            title: "Do away with",
            description: "To eliminate or get rid of something",
            example: "They want to do away with the old law.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/do-away-with"
        },
        {
            title: "Drop in",
            description: "To visit someone informally or unexpectedly",
            example: "Feel free to drop in whenever you're in the area.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/drop-in"
        },
        {
            title: "Fall apart",
            description: "To break into pieces or to become emotionally upset",
            example: "Their marriage began to fall apart after the incident.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/fall-apart"
        },
        {
            title: "Get over with",
            description: "To finish something unpleasant but necessary",
            example: "Let's get this meeting over with.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/get-over-with"
        },
        {
            title: "Hold on",
            description: "To wait or to grasp something tightly",
            example: "Hold on a second, I'll be right back.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/hold-on"
        },
        {
            title: "Let down",
            description: "To disappoint someone",
            example: "He promised to help, but he let me down.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/let-down"
        },
        {
            title: "Pass out",
            description: "To lose consciousness or to distribute something",
            example: "He passed out from the heat.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/pass-out"
        },
        {
            title: "Put through",
            description: "To connect someone on the phone or to make someone experience something difficult",
            example: "Can you put me through to the manager, please?",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/put-through"
        },
        {
            title: "Set off",
            description: "To start a journey or to cause something to explode",
            example: "We set off early to avoid the traffic.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/set-off"
        },
        {
            title: "Stand up for",
            description: "To defend or support a particular idea or person",
            example: "You need to stand up for your rights.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/stand-up-for"
        },
        {
            title: "Take up",
            description: "To begin a new hobby or activity",
            example: "She has taken up painting recently.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/take-up"
        },
        {
            title: "Turn down",
            description: "To refuse an offer or request",
            example: "She turned down the invitation to the party.",
            link: "https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/turn-down"
        },                                
];