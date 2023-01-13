import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient,
    private alertC: AlertController) {

  }
  res:any;
  ngOnInit(): void {
    this.http.get(environment.baseApiUrl).subscribe((res)=>{
      console.log(res);
      this.res=res;
    })
  }
  onSearchChange(e:any){
    // console.log(e);
    let value = e.detail.value
    console.log(value); 
  }

  showAlert(){
    // xxx.create().then(): 弹框服务，创建弹框().然后(弹框do...事)
    this.alertC
      .create({
        header:"Attention",
        // subHeader:"Important message",
        message:"Il faut charger!",
        buttons:[{
          text:"ok",
          handler:() => {
            console.log("tout de suite")
          },
        },
        {
          text:"supprimer",
          handler:() => {
            console.log("plus tard")
          },
        }
      ]
      }).then((res)=>res.present())
  // present():弹出  res是创建出来的对话框，  对话框.弹出()
  }

  // loadData(e) {
  //  console.log("bas")
  // //  加载更多
  // }

  doRefresh(event:any){
    setTimeout(()=>{
      event.target.complete();
    },2000)

  }

  loadData1(e:any){
    setTimeout(() => {
      e.target.complete()
    }, 2000);
  }
}





