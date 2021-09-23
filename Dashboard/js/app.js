
machineLearningModel = [
  {
    model: 'logisticRegression',
    src: 'static/images/logisticRegression.png'
  },
  {
    model: 'decisionTree',
    src: 'static/images/decisionTree.png'
  }
]

function optionChanged(newModel){
  console.log(newModel)

  modelImg = d3.select('#model');
  modelImg.html('')

  for (object of machineLearningModel){
    console.log(object)
    if (object.model === newModel){
    modelImg.attr('src',  object.src) 
    console.log(object.src)}}
}