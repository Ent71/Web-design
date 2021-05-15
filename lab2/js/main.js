import Model from './model/Model.js';
import View from './view/View.js';
import Controller from './controller/Controller.js';


let model = new Model();
let view = new View(model);


let controller = new Controller(model, view);

controller.addLink("https://music.youtube.com/watch?v=UEI3448lzQQ&list=RDTMAK5uy_kset8DisdE7LSD4TNjEVvrKRTmG7a56sY", "https://cutt.ly/nbHdaH6");
controller.addLink("https://classroom.google.com/u/0/c/MjYzMjI5NjU5Mjk0", "https://cutt.ly/jbHdloW");

