/* ===== Constructor ===== */
function PersonalAssistant(name) 
{
  this.name  = name;
  this.tasks = [];
  this.mood  = "motivated";   // Starting mood
}

/* ===== Methods ===== */

// Add a task to the queue
PersonalAssistant.prototype.addTask = function(task) 
{
  this.tasks.push(task);
  console.log(`${this.name}: Added — "${task}"`);
};

// Complete the next task in the queue
PersonalAssistant.prototype.completeTask = function() 
{
  if (this.tasks.length === 0) 
  {
    console.log(`${this.name}: All tasks done. Time for a break!`);
    return;
  }
  const finished = this.tasks.shift();
  console.log(`${this.name}: Completed — "${finished}"`);
};

// Report current mood
PersonalAssistant.prototype.reportMood = function() 
{
  console.log(`${this.name}: Mood — ${this.mood}`);
};

// Show how many tasks remain
PersonalAssistant.prototype.tasksLeft = function() 
{
  console.log(`${this.name}: ${this.tasks.length} task(s) left.`);
};

// Change the assistant's mood explicitly
PersonalAssistant.prototype.changeMood = function(newMood) 
{
  this.mood = newMood;
  console.log(`${this.name}: Mood switched to ${this.mood}`);
};


/* ===== Simulating Nikki’s Day ===== */

const nikkiBot = new PersonalAssistant("NikkiBot");

// Morning introduction
console.log(`Hi! I'm ${nikkiBot.name}, your assistant.`);

// Add real-life tasks
nikkiBot.addTask("Study for biology quiz");
nikkiBot.addTask("Prepare UX portfolio slides");
nikkiBot.addTask("Call VA about benefits");

nikkiBot.reportMood();
nikkiBot.tasksLeft();

// Power through a couple of tasks
nikkiBot.completeTask();
nikkiBot.completeTask();
nikkiBot.tasksLeft();

// Mood dip after heavy work
nikkiBot.changeMood("tired");
nikkiBot.reportMood();

// Final push
nikkiBot.completeTask();
nikkiBot.tasksLeft();

// Celebrate!
nikkiBot.changeMood("accomplished 🎉");
nikkiBot.reportMood();
