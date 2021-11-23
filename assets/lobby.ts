
import { _decorator, Component, Node, resources, SpriteFrame, Sprite, Texture2D } from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Lobby
 * DateTime = Sun Nov 21 2021 21:46:00 GMT+0800 (中国标准时间)
 * Author = kkstare
 * FileBasename = lobby.ts
 * FileBasenameNoExtension = lobby
 * URL = db://assets/lobby.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 



@ccclass('Lobby')
export class Lobby extends Component {
    // [1]
    // dummy = '';

    [2]
    @property(Node)
    spNode:Node = null;

    start () {
        // [3]
        let that = this
        resources.load("cocos/spriteFrame", SpriteFrame, function(err, res){
            if (err) console.log(err)
            that.spNode.getComponent(Sprite).spriteFrame = res
        })


        // type A={
        //     name: "a",
        //     age: number,
            
        // }
        // type B = {
        //     name: "b",
        //     gfNumber:number
        // }
        // type C = A | B
        // let test: C
        // test.name = "a"
        // if (test.name == "a") {
        //     test.age = 1
        // }

    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
