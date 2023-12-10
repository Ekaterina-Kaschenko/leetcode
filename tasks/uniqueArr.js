let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  return Array.from(new Set(arr));
}

unique(values); // Hare,Krishna,:-O