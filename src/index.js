let questions = [
  "Would you say you’re more of an extrovert or an introvert?",
  "What's your favorite ice cream topping?",
  "What was the last TV show you binge-watched?",
  "Do you have a favorite holiday? Why or why not?",
  "If you could only eat one food for the rest of your life, what would it be?",
  "Do you like going to the movies or prefer watching at home?",
  "What’s your favorite sleeping position?",
  "In the summer, would you rather go to the beach or go camping?",
  "What’s your favorite quote from a TV show/movie/book?",
  "How old were you when you had your first celebrity crush, and who was it?",
  "What's one thing that can instantly make your day better?",
  "Do you have any pet peeves?",
  "Ideally, how would you spend your birthday?",
  "Do you have a favorite type of exercise?",
  "What's the best joke you've ever heard?",
  "Would you rather cook or order in?",
  "What's your favorite board game?",
  "What's your favorite coffee drink?",
  "What's your most prized possession and why?",
  "Do you sleep with a top sheet? Why or why not?",
  "What annoys you most?",
  "Have you ever had imposter syndrome?",
  "What's the best career advice you've ever heard?",
  "What's the worst career advice you've ever heard?",
  "Who do you most like spending time with and why?",
  "How do you define your family now?",
  "Do you ever wish you were raised differently?",
  "What’s a relationship deal breaker for you?",
  "If you had only one sense (hearing, touch, sight, etc.), which would you want?",
  "What is your definition of success?",
  "What makes you feel at peace?",
  "What are you most proud of in the last year?",
  "What makes you feel most accomplished?",
  "Who do you admire most in the world?",
  "Would you rather make more money doing a job you hate or less doing one you love?",
  "Which of your personality traits are you most proud of?",
  "What’s the first thing you look for in a partner and/or friend?",
  "How has your perspective on the world changed over time?",
  "Do you live by any piece of advice or motto?",
  "How can someone earn your trust? How can someone lose your trust?",
  "Would you rather someone be honest and hurt your feelings or lie to protect them?",
  "If you could snap your fingers and instantly make the world better, what would you do?",
  "Do you believe in astrology? Why or why not?",
  "Have you ever lost a friend? If so, what happened?",
  "What’s the scariest thing you’ve ever done, and why did you do it?",
  "Do you believe in second chances?",
  "Where do you get your news?",
  "What is your biggest irrational fear?",
  "Are you active on social media, or do you prefer to be more private?",
  "Do you believe you should do one thing a day that scares you?",
  "What, if anything, do you think happens after death?",
  "What line should someone never cross with you?",
  "How do you define beauty?",
  "Do you believe in life on other planets?",
  "How do you interact with someone who disagrees with you?",
  "If you had unlimited money to start your own business, what would it be?",
  "If you could live anywhere in the world, where would it be?",
  "A genie gives you three wishes—what are they?",
  "If you had the opportunity to be immortal, would you take it?",
  "If you could time travel, when and where would you go?",
  "If you could magically become famous, would you want to?",
  "If you see a puddle on the ground, do you walk around it or over it?",
  "If you could have a super power, what would it be?",
  " If you came back in your next life as an animal, what animal would you be?",
  " If you got to name a new country, how would you decide what to call it?",
  "What would be the title of your memoir?",
  "Do you think iced coffee should only be consumed in the summer or all year round?",
  "Would you rather be covered in fur or covered in scales?",
  "What’s your idea of a perfect date (yes, of the calendar year)?",
  "What’s the most unusual place you’ve fallen asleep?",
  "At a party, where can someone find you?",
  "Do you wash your legs in the shower?",
  "Who would play you in the movie of your life?",
  "When making a PB&J sandwich, do you put on the peanut butter or jelly first?",
  "Do you have any allergies?",
  "Do you trust your own memory? Why or why not?",
  "Which fictional character do you relate to most?",
  "What, if anything, would make you walk out in the middle of a movie?",
  "When was the last time you cried and why?",
  "What's your most controversial opinion about something mundane?",
  "What was your all-time favorite Halloween costume?",
  "What's the weirdest thing you do when you're alone?",
  "Do you have any recurring dreams?",
  "What's the silliest argument you've ever been in?",
  "What's the worst argument you've ever been in?",
  "What's your opinion on modern art?",
  "What's the most ridiculous outfit you've ever worn?",
  "What was the first thing you wanted to be when you grew up?",
  "If you could own a mythical creature (unicorn, phoenix, etc.), which one would you pick?",
  "What's your least favorite place in the world?",
  "Would you rather have your dishes or clothes be magically clean?",
  "What's your favorite story about yourself?",
  "If you could change anything about yourself, would you? If so, what and why?",
  "What’s your favorite book?",
  "What is your most-used emoji?",
  "If you could win an Olympic medal for any sport, real or fake, what would it be?",
  "What movie or TV show title best describes your week?",
  "What’s your hidden talent?",
  "What was your favorite subject in school?",
  "What’s been on your mind lately?",
  "What's one thing about you that surprises people?",
  "What was something you've done that made you feel extreme happiness?",
  "Knowing what you know now, what advice would you give your 18-year-old self?",
  "If you could instantly become an expert in something, what would it be?",
  "How can someone win a gold star with you?",
  "What qualities do you value in the people with whom you spend time?",
  "If you didn’t have to sleep, what would you do with the extra time?",
  "If you had to choose only 3 adjectives to describe yourself, which would you choose?",
  "Has anything ever happened to you that you could not, and cannot, explain?",
  "Do you ever find there are things about you that people misunderstand? What are they?",
  "For what are you most grateful today?",
  "If you could have one 'do over' in your life, what would you do differently?",
  "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
  "When did you last sing to yourself? To someone else?",
  "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
  "Do you have a secret hunch about how you will die?",
  "Name three things you and the person you're talking with appear to have in common.",
  "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
  "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
  "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
  "What do you value most in a friendship?",
  "What is your most terrible memory?",
  "What roles do love and affection play in your life?",
  "Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.",
  "How close and warm is your family? Do you feel your childhood was happier than most other people’s?",
  "How do you feel about your relationship with your mother?",
  "Make three true 'we' statements each. For instance, 'We are both in this room feeling ...'",
  "Complete this sentence: I wish I had someone with whom I could share ... ",
  "If you were going to become a close friend with your partner, please share what would be important for them to know.",
  "Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.",
  "What was a really embarrassing moment in your life?",
  "When did you last cry in front of another person? By yourself?",
  "Tell the person you're talking to something that you like about them already.",
  "What, if anything, is too serious to be joked about?",
  "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
  "Of all the people in your family, whose death would you find most disturbing? Why?",
  "Take four minutes and tell your partner your life story in as much detail as possible.",
  "What really makes you angry?",
  "What motivates you to work hard?",
  "What makes you laugh the most?",
  "What was the last movie you went to? What did you think?",
  "What would you sing at Karaoke night?",
  "Which would you rather do: wash dishes, mow the lawn, clean the bathroom, or vacuum the house?",
  "Have you ever had a nickname? What is it?",
  "Do you like or dislike surprises? Why or why not?",
  "Would you rather vacation in Hawaii or Alaska, and why?",
  "Would you rather win the lottery or work at the perfect job? And why?",
  "If money was no object, what would you do all day?",
  "How would your friends describe you?",
  "What is the worst gift you have received?",
  "How many pairs of shoes do you own?",
  "How many pillows do you sleep with?",
  "What's the longest you've gone without sleep (and why)?",
  "Would you rather trade intelligence for looks or looks for intelligence?",
  "How often do you buy clothes?",
  "Have you ever had a secret admirer?",
  "What's the most daring thing you've ever done?",
  "Are you a clean or messy person?",
  "How long does it take you to get ready in the morning?",
  "What's the craziest thing you’ve done in the name of love?",
  "What's the most unusual thing you've ever eaten?",
  "Is there anything you wished would come back into fashion?",
  "Are you an introvert or an extrovert?",
  "Which of the five senses would you say is your strongest?",
  "If you were ruler of your own country what would be the first law you would introduce?",
  "What three things/people do you think of the most each day?",
  "If you had a warning label, what would yours say?",
  "What song would you say best sums you up?",
  "On a scale of 1-10 how funny would you say you are?",
  "Who is the most intelligent person you know?",
  "What kind of dog are you?",
  "What is one thing you will never do again?",
  "Who knows you the best?",
  "What kind of tree are you?",
  "If you could invent a new dish, what ingredients would it have?",
  "If you could completely get rid of one month out of the year, which month would it be and why?",
  "Do you have a least favorite spoon in your silverware drawer?",
  "What would be the silliest feature of your dream house?",
  "What’s the worst fashion or hair decision you’ve made?",
  "What obscure thing are you talented at?",
  "What one superpower would you give to everyone in the world? How would the world change?",
  "What’s a common saying that you don’t understand or that you think is odd?",
  "If your pet could talk, what would be their catchphrase?",
  "If you had to make a house out of food, what kind of food would it be?",
  "Do you believe aliens exist? If so, what are they like?",
  "What one story about your childhood best explains the person you are today?",
  "What’s the best prank you’ve ever pulled on someone?",
  "What’s the most awkward date you’ve ever been on?",
  "If you could create a new invention, what would you create?",
  "What is the weirdest roommate story you’ve heard?",
  "What word do you always mispronounce?",
];

function generateQuestion() {
  let index = Math.floor(Math.random() * questions.length);
  let div = document.querySelector("#question");
  div.innerHTML = `${questions[index]}`;
}

let button = document.querySelector("button");
button.addEventListener("click", generateQuestion);
