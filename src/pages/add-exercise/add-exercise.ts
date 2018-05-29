import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../common/User';



@IonicPage()
@Component({
  selector: 'page-add-exercise',
  templateUrl: 'add-exercise.html',
})
export class AddExercisePage {
  currentUser:any;
  exercise:string;
  cat:string;
  goal:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.currentUser = navParams.get('currentUser');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExercisePage');
  }

  closeModal(){
    if (!(this.exercise == "")){
      this.currentUser.getNewExercise(this.exercise);
    }
    this.view.dismiss();
  }

}
