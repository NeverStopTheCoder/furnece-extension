// Add your code here
//%block="Furnace"
//%icon=""
//%color="#BD370A"
namespace Furnece {
    let fire: Sprite = null
    let sqaure2: Sprite = null
    let sqaure: Sprite = null
    let mySprite: Sprite = null
    let cooked = false
    let cookeditem: Sprite = null
    let cookeditem2: Sprite = null
    let smelt: Sprite = null
    let On = 0
    let Number3 = 0
    let Number2 = 0
    let Number4 = 0
    let st2 = false
    let st = false
    let st3 = false
    st = true
    st2 = true
    st3 = true
    cooked = false

    //%block="Create Furnace UI"
    export function furnece(): void {
        scene.setBackgroundColor(11)
        mySprite = sprites.create(img`
            cccccccccccccccccccb
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            b1111111111111111111
        `, SpriteKind.Player)
        mySprite.x = 40
        mySprite.y = 30
        sqaure = sprites.create(img`
            cccccccccccccccccccb
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            b1111111111111111111
        `, SpriteKind.Player)
        sqaure.x = 40
        sqaure.y = 70
        sqaure2 = sprites.create(img`
            cccccccccccccccccccb
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            cbbbbbbbbbbbbbbbbbb1
            b1111111111111111111
        `, SpriteKind.Player)
        sqaure2.x = 100
        sqaure2.y = 50
        fire = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . c . . . . . . . . . c . . .
            . . c . . . . . . . . . c . . .
            . . . c . . . c . . . c . . . .
            . . . c . . . c . . . c . . . .
            . . c c . . . . c . . c c . . .
            . . c c . . . . c . . c c . . .
            . c c c . . . c c . . c c c . .
            . c c . . . . c c . . . c c . .
            . c c . . . c c c . . . c c . .
            . c c c . . c c . . . c c c . .
            . . c c . . c c . . . c c . . .
            . . c c . . c c c . . c c . . .
            . c c c . . c c c . . c c c . .
        `, SpriteKind.Player)
        fire.x = 40
        fire.y = 50
        scene.createRenderable(10, function (target, camera) {
            if (st3 == true) {
            target.print("Furnace", 55, 10, 2)
            }
        })
        smelt = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Food)
        smelt.x = 100
        smelt.y = 50
    }
    //%block="set Furnece fuel amount to $num and raw item amount to $num2 and raw item image to $image and fuel image to $image2"
    //%image.shadow=screen_image_picker
    //%image2.shadow=screen_image_picker
    export function furnec(num: number,num2: number,image:Image,image2:Image): void {
        Number2 = num
        Number3 = num2
        cookeditem2 = sprites.create(image, SpriteKind.Player)
        cookeditem2.setPosition(mySprite.x, mySprite.y)
        cookeditem = sprites.create(image2, SpriteKind.Player)
        cookeditem.setPosition(sqaure.x, sqaure.y)
        scene.createRenderable(10, function (target, camera) {
            if (st == true) {
                target.print(convertToText(Number3), cookeditem2.x, cookeditem2.y, 2)
            }
        })
        scene.createRenderable(10, function (target, camera) {
            if (st2 == true) {
                target.print(convertToText(Number2), cookeditem.x, cookeditem.y, 2)
            }
        })
    }
    //%block="set Furnace to smelt $image"
    //%image.shadow=screen_image_picker
    export function furne(image: Image,): void {
        while (Number2 > 0 && Number3 > 0) {
            animation.runImageAnimation(
                fire,
                [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c . . . . . . . . . c . . . 
            . . c . . . . . . . . . c . . . 
            . . . c . . . c . . . c . . . . 
            . . . c . . . c . . . c . . . . 
            . . c c . . . . c . . c c . . . 
            . . c c . . . . c . . c c . . . 
            . c c c . . . c c . . c c c . . 
            . c c . . . . c c . . . c c . . 
            . c c . . . c c c . . . c c . . 
            . c c c . . c c . . . c c c . . 
            . . c c . . c c . . . c c . . . 
            . . c c . . c c c . . c c . . . 
            . c c c . . c c c . . c c c . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . 2 . . . 
            . . 4 2 . . . 2 . . . 2 4 . . . 
            . . . 4 . . . 4 . . . 4 . . . . 
            . . 2 5 . . . 5 2 . . 5 2 . . . 
            . . 4 5 . . . . 4 . . 5 4 . . . 
            . . 5 1 . . . 2 4 . . 1 5 . . . 
            . 2 5 4 . . . 5 4 . . 4 5 2 . . 
            . 4 1 2 . . 2 1 5 . . 2 5 4 . . 
            . 5 1 . . . 4 5 2 . . . 1 5 . . 
            . 1 1 4 . . 4 1 . . . 4 1 5 . . 
            . 2 1 5 . . 5 1 . . . 5 1 2 . . 
            . . 1 1 . . 5 1 5 . . 1 1 . . . 
            . 5 1 5 . . 4 1 1 . . 4 1 4 . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c . . . . . . . . . c . . . 
            . . c c . . . c . . . c c . . . 
            . . . c . . . c . . . c . . . . 
            . . 2 5 . . . c c . . 5 2 . . . 
            . . 4 5 . . . . 4 . . 5 4 . . . 
            . . 5 1 . . . 2 4 . . 1 5 . . . 
            . 2 5 4 . . . 5 4 . . 4 5 2 . . 
            . 4 1 2 . . 2 1 5 . . 2 5 4 . . 
            . 5 1 . . . 4 5 2 . . . 1 5 . . 
            . 1 1 4 . . 4 1 . . . 4 1 5 . . 
            . 2 1 5 . . 5 1 . . . 5 1 2 . . 
            . . 1 1 . . 5 1 5 . . 1 1 . . . 
            . 5 1 5 . . 4 1 1 . . 4 1 4 . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c . . . . . . . . . c . . . 
            . . c c . . . c . . . c c . . . 
            . . . c . . . c . . . c . . . . 
            . . c c . . . c c . . c c . . . 
            . . c c . . . . c . . c c . . . 
            . . c c . . . c c . . c c . . . 
            . 2 5 4 . . . c c . . 4 5 2 . . 
            . 4 1 2 . . 2 1 5 . . 2 5 4 . . 
            . 5 1 . . . 4 5 2 . . . 1 5 . . 
            . 1 1 4 . . 4 1 . . . 4 1 5 . . 
            . 2 1 5 . . 5 1 . . . 5 1 2 . . 
            . . 1 1 . . 5 1 5 . . 1 1 . . . 
            . 5 1 5 . . 4 1 1 . . 4 1 4 . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c . . . . . . . . . c . . . 
            . . c c . . . c . . . c c . . . 
            . . . c . . . c . . . c . . . . 
            . . c c . . . c c . . c c . . . 
            . . c c . . . . c . . c c . . . 
            . . c c . . . c c . . c c . . . 
            . c c c . . . c c . . c c c . . 
            . c c c . . c c c . . c c c . . 
            . c c . . . c c c . . . c c . . 
            . 1 1 4 . . c c . . . 4 1 5 . . 
            . 2 1 5 . . 5 1 . . . 5 1 2 . . 
            . . 1 1 . . 5 1 5 . . 1 1 . . . 
            . 5 1 5 . . 4 1 1 . . 4 1 4 . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c . . . . . . . . . c . . . 
            . . c c . . . c . . . c c . . . 
            . . . c . . . c . . . c . . . . 
            . . c c . . . c c . . c c . . . 
            . . c c . . . . c . . c c . . . 
            . . c c . . . c c . . c c . . . 
            . c c c . . . c c . . c c c . . 
            . c c c . . c c c . . c c c . . 
            . c c . . . c c c . . . c c . . 
            . c c c . . c c . . . c c c . . 
            . c c c . . c c . . . c c c . . 
            . . c c . . c c c . . c c . . . 
            . 5 1 5 . . c c c . . 4 1 4 . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c . . . . . . . . . c . . . 
            . . c c . . . c . . . c c . . . 
            . . . c . . . c . . . c . . . . 
            . . c c . . . c c . . c c . . . 
            . . c c . . . . c . . c c . . . 
            . . c c . . . c c . . c c . . . 
            . c c c . . . c c . . c c c . . 
            . c c c . . c c c . . c c c . . 
            . c c . . . c c c . . . c c . . 
            . c c c . . c c . . . c c c . . 
            . c c c . . c c . . . c c c . . 
            . . c c . . c c c . . c c . . . 
            . c c c . . c c c . . c c c . . 
            `],
                500,
                true
            )
            pause(3100)
            Number2 += -1
            Number3 += -1
            Number4 += 1
            smelt.setImage(image)
            scene.createRenderable(10, function (target, camera) {
                target.print(convertToText(Number4), smelt.x, smelt.y, 2)
            })
            if (Number2 == 0 || Number3 == 0) {
                animation.stopAnimation(animation.AnimationTypes.All, fire)
                cooked = true
            }
            if (Number3 == 0) {
                cookeditem2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            }
            if (Number2 == 0) {
                cookeditem.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `)
                st2 = false
                st = false
            }
        }
}
    //%block="cooked item"
    export function furn(): Sprite {
return smelt
    }
    //%block="set Fuel amount to $num"
    export function fur(num: number): void {
        Number2 = num
    }
    //%block="Exit Furnace"
    export function fu(): void {     
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)   
        st3 = false
        st2 = false
        st = false
        
    }
    //%block="cooked item image"
    export function furn2(): Image {
        return smelt.image
    }
    }

