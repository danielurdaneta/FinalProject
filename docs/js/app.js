// Data used to filter by selected model.
let machineLearningModel = [
  {
    model: 'randomForest',
    src: 'static/images/randomForest.png'
  },
  {
    model: 'logisticRegression',
    src: 'static/images/logisticRegression.png'
  },
  {
    model: 'gradientBoostedTrees',
    src: 'static/images/gradientBoostedTrees.png'
  }
];

// Function that filters model image when user change it.
function modelChanged(newModel){
  let modelImg = d3.select('#model');
  modelImg.html('');

  for (object of machineLearningModel){
    if (object.model === newModel){
    modelImg.attr('src',  object.src) 
    }};
};

// Function that prints each fighter name in the drop off menu
function dropOffMenu(){
   let selector = d3.select("#fighters");
      
   d3.json("individual.json").then((data) => {
     let fighterName = data.Fighter;
 
     for (index in fighterName) {
       selector
         .append("option")
         .text(fighterName[index])    
         .property("value", index);
     };
})
};

// Function that modifies the table when user select a different fighter
function fighterChanged(newFighter){
  let tbody = d3.select("tbody").html("");
  let row = tbody.append("tr");

  d3.json("individual.json").then((data) => {
    let keys = Object.keys(data);
    keys.splice(0,1); // <= Deletes the fighter names object so we don't add it to the table
    
    keys.forEach(key => {
      let cell = row.append("td");
      cell.text(data[key][newFighter])
    });
  });  
};

// Initializes the drop off menu
dropOffMenu();

// Create data for the first fighter when page is loaded
fighterChanged(0);
