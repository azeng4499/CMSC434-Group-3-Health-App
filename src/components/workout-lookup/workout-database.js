{
  /* Dumbbell, cables, bar, None*/
}

export const ARM_WORKOUT_MUSCLE_GROUPS = ["Bicep", "Tricep"];
export const ARM_WORKOUT_EQUIPMENT = ["Dumbbells", "Cables", "Bar"];
export const ARM_WORKOUTS = [
  {
    name: "Bicep Dumbbell Curls",
    description:
      "Stand with feet shoulder-width apart, hold a dumbbell in each hand with arms fully extended, curl the weights towards your shoulders while keeping elbows close to your body, then lower them back down in a controlled motion",
    difficulty: 2,
    muscle: "Bicep",
    equipment: "Dumbbells",
  },
  {
    name: "Hammer Curls",
    description:
      "Hold a dumbbell in each hand with palms facing your body, then curl the weights upward while keeping your elbows close to your sides, and lower them back down in a controlled motion.",
    difficulty: 2,
    muscle: "Bicep",
    equipment: "Dumbbells",
  },
  {
    name: "Seated Incline Dumbbell Curls",
    description:
      "Sit on an incline bench with dumbbells in hand, palms facing up, then curl the weights towards your shoulders while keeping your elbows still, and lower them back down slowly",
    difficulty: 5,
    muscle: "Bicep",
    equipment: "Dumbbells",
  },
  {
    name: "Standing Single Arm Bicep Curls",
    description:
      "Stand upright with a cable machine, grasp a handle with one hand, keeping your elbow close to your side, then curl the handle towards your shoulder, and lower it back down in a controlled manner. (Can be done facing towards or away from the machine)",
    difficulty: 3,
    muscle: "Bicep",
    equipment: "Cables",
  },
  {
    name: "Tricep Kickbacks",
    description:
      "Hold a dumbbell in one hand, hinge forward at the hips to a bent-over position, extend your arm backward while keeping your elbow stationary, then return to the starting position",
    difficulty: 2,
    muscle: "Tricep",
    equipment: "Dumbbells",
  },
  {
    name: "Pushups",
    description:
      "Start in a plank position with hands shoulder-width apart, lower your body until your chest nearly touches the ground, then push back up to the starting position by straightening your arms.",
    difficulty: 1,
    muscle: "Tricep",
    equipment: "No Equipment",
  },
  {
    name: "Tricep Rope Pulldowns",
    description:
      "Stand facing a cable machine with a rope attachment, grip the ends of the rope with palms facing each other, then pull the rope down by extending your elbows until your arms are fully extended, and return to the starting position in a controlled manner.",
    difficulty: 2,
    muscle: "Tricep",
    equipment: "Cables",
  },
  {
    name: "Lying Dumbbell Triceps Extensions",
    description:
      "Lie on a flat bench with a dumbbell in each hand, extend your arms straight up, then bend your elbows to lower the dumbbells towards your forehead, and extend your arms back up to the starting position.",
    difficulty: 4,
    muscle: "Tricep",
    equipment: "Dumbbells",
  },
  {
    name: "Close Grip Bench Press",
    description:
      "Lie on a flat bench, grasp the barbell with hands positioned closer than shoulder-width apart, lower it to your chest, then press it upward while keeping elbows close to your body",
    difficulty: 4,
    muscle: "Tricep",
    equipment: "Bar",
  },
];

export const LEG_WORKOUT_MUSCLE_GROUPS = ["Quads", "Hamstrings", "Calves"];
export const LEG_WORKOUT_EQUIPMENT = ["Bar"];
export const LEG_WORKOUTS = [
  {
    name: "Jumping Squats",
    description:
      "Perform a squat, then explosively jump upward while extending your arms overhead, and land softly, bending your knees to absorb the impact.",
    difficulty: 1,
    muscle: "Quads",
    equipment: "No Equipment",
  },
  {
    name: "Barbell Squats",
    description:
      "Stand with a barbell resting on your upper back and shoulders, then lower your body by bending your knees and hips until your thighs are parallel to the ground, keeping your chest up and back straight, then push through your heels to return to standing position.",
    difficulty: 4,
    muscle: "Quads",
    equipment: "Bar",
  },
  {
    name: "Barbell Deadlift",
    description:
      "Stand with your feet hip-width apart, bend your knees and hinge at your hips to lower your torso while keeping your back straight, grip the barbell with hands shoulder-width apart, and lift the barbell by driving through your heels and straightening your hips and knees until you're standing upright, then lower the barbell back to the ground in a controlled manner.",
    difficulty: 5,
    muscle: "Quads",
    equipment: "Bar",
  },
  {
    name: "Lunges",
    description:
      "Step forward with one leg, lowering your hips until both knees are bent at 90-degree angles, then push back up to the starting position using your front heel to return to standing",
    difficulty: 1,
    muscle: "Quads",
    equipment: "No Equipment",
  },
  {
    name: "Romanian Deadlifts",
    description:
      "Stand with feet hip-width apart, holding a barbell in front of your thighs, hinge at the hips while keeping your back straight, lower the barbell toward the ground, then return to standing position by squeezing your glutes and engaging your hamstrings.",
    difficulty: 5,
    muscle: "Hamstrings",
    equipment: "Bar",
  },
  {
    name: "Calf Raises",
    description:
      "Stand with your feet hip-width apart, then rise onto your toes as high as possible, holding the position briefly before lowering back down. (Can be done with dumbbells as well)",
    difficulty: 2,
    muscle: "Calves",
    equipment: "No Equipment",
  },
];

export const UPPER_BODY_MUSCLE_GROUPS = ["Back", "Chest", "Shoulders"];
export const UPPER_BODY_EQUIPMENT = ["Bar", "Dumbbells", "Cables"];
export const UPPER_BODY_WORKOUTS = [
  {
    name: "Bench Press",
    description:
      "Lie on a flat bench, grip the barbell slightly wider than shoulder-width apart, lower it to your chest, then press it upward until your arms are fully extended, focusing on controlled movements.",
    difficulty: 4,
    muscle: "Chest",
    equipment: "Bar",
  },
  {
    name: "Dumbbell Bench Press",
    description:
      "Lie on a flat bench while holding a dumbbell in each hand above your chest, then lower the dumbbells towards your sides until your elbows form a 90-degree angle, and press them back up to the starting position.",
    difficulty: 3,
    muscle: "Chest",
    equipment: "Dumbbells",
  },
  {
    name: "Incline Barbell Bench Press",
    description:
      "Lie on a bench with your feet flat on the floor, grip the barbell with hands slightly wider than shoulder-width apart, lower the barbell to your chest, then press it upward until arms are fully extended, and repeat. (Can also be done with dumbbells)",
    difficulty: 4,
    muscle: "Chest",
    equipment: "Bar",
  },
  {
    name: "Incline Dumbbell Bench Press",
    description:
      "Lie on an incline bench with dumbbells in each hand, then press them upward at an angle while keeping your elbows close to your body, and lower them back down.",
    difficulty: 4,
    muscle: "Chest",
    equipment: "Bar",
  },
  {
    name: "Dumbbell Fly",
    description:
      "Lie on a flat bench with a dumbbell in each hand, palms facing each other, then slowly lower the weights out to the sides until your arms are parallel to the ground, and raise them back up to the starting position. (Can also be done on the floor)",
    difficulty: 4,
    muscle: "Chest",
    equipment: "Dumbbells",
  },
  {
    name: "Cable Flys",
    description:
      "Stand in front of a cable machine with the handles set at shoulder height, grasp the handles with an overhand grip, and then bring your hands together in front of your chest while maintaining a slight bend in your elbows, then return to the starting position in a controlled manner.",
    difficulty: 2,
    muscle: "Chest",
    equipment: "Cables",
  },
  {
    name: "Pullups",
    description:
      "Grasp the pull-up bar with an overhand grip slightly wider than shoulder-width apart, then pull your body upward until your chin clears the bar, and lower yourself back down with control.",
    difficulty: 1,
    muscle: "Back",
    equipment: "No Equipment",
  },
  {
    name: "Lat Pulldowns",
    description:
      "Sit down, grab the bar with an overhand grip wider than shoulder-width apart, then pull the bar down towards your chest while keeping your back straight and elbows pointed down, and slowly return to the starting position.",
    difficulty: 3,
    muscle: "Back",
    equipment: "Cables",
  },
  {
    name: "Dumbbell Rows",
    description:
      "Hold a dumbbell in one hand, place the opposite knee and hand on a bench for support, then pull the weight towards your hip while keeping your back straight, and lower it back down in a controlled manner.",
    difficulty: 3,
    muscle: "Back",
    equipment: "Dumbbells",
  },
  {
    name: "Barbell Rows",
    description:
      "Grip the barbell with hands shoulder-width apart, pull it toward your chest, keeping elbows close to your body, then lower the barbell back down with control.",
    difficulty: 4,
    muscle: "Back",
    equipment: "Bar",
  },
  {
    name: "Shoulder Shrugs",
    description:
      "Hold a dumbbell in each hand by your sides, lift your shoulders upward towards your ears, hold briefly, then lower them back down in a controlled manner. (Can also be done with a bar)",
    difficulty: 2,
    muscle: "Shoulders",
    equipment: "Dumbbells",
  },
  {
    name: "Standing Shoulder Press",
    description:
      "Stand upright with dumbbells held at shoulder height, palms facing forward, then press the weights upward until arms are fully extended overhead, and lower them back down to starting position. (Can also be done with a bar)",
    difficulty: 3,
    muscle: "Shoulders",
    equipment: "Dumbbells",
  },
  {
    name: "Side Lateral Raises",
    description:
      "Start by standing with a dumbbell in each hand at your sides, then lift the weights outward and upward until they reach shoulder level, and lower them back down slowly.",
    difficulty: 2,
    muscle: "Shoulders",
    equipment: "Dumbbells",
  },
];
