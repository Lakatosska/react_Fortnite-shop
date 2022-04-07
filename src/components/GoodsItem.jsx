function GoodsItem(props) {
  
  // по умолчанию goods - пустой массив
  const { 
    mainId, 
    displayName, 
    displayDescription, 
    displayAssets, 
    price, 
    addToBasket
  } = props;

  return(
    <div className="card">
      <div className="card-image">
      <img src={displayAssets[0].full_background} alt={displayName}/>
        
      </div>
      <div className="card-content">
      <span className="card-title">{displayName}</span>
        <p>
          {displayDescription}
        </p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket({
          mainId, displayName, price,
        })}>Купить</button>
        <span className="right" style={{fontSize: "1.8rem"}}>{price.regularPrice} руб.</span>
      </div>
    </div>        
    
  )}

export { GoodsItem };

/*
"shop": [
  {
      "mainId": "CID_A_318_Athena_Commando_M_KittyWarrior",
      "displayName": "Azuki",
      "displayDescription": "Wandering warrior destined to end the Whiskeria Wars.",
      "displayType": "Outfit",
      "mainType": "outfit",
      "offerId": "v2:/1aee4c0edde858dc7921817be4f91639590616f7ee96599b0a70014735cca11f",
      "displayAssets": [
          {
              "displayAsset": "DAv2_CID_A_318_M_KittyWarrior",
              "materialInstance": "MI_CID_A_318_M_KittyWarrior",
              "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_318_M_KittyWarrior/MI_CID_A_318_M_KittyWarrior.png",
              "flipbook": null,
              "background_texture": null,
              "background": "https://media.fortniteapi.io/images/cosmetics/0488639b1fd10e1af2fd228ac4996b6a/v2/MI_CID_A_318_M_KittyWarrior/background.png",
              "full_background": "https://media.fortniteapi.io/images/cosmetics/0488639b1fd10e1af2fd228ac4996b6a/v2/MI_CID_A_318_M_KittyWarrior/info.en.png"
          },
          {
              "displayAsset": "DAv2_CID_A_318_M_KittyWarrior",
              "materialInstance": "MI_CID_A_318_M_KittyWarrior_02",
              "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_318_M_KittyWarrior/MI_CID_A_318_M_KittyWarrior_02.png",
              "flipbook": null,
              "background_texture": null,
              "background": "https://media.fortniteapi.io/images/cosmetics/0488639b1fd10e1af2fd228ac4996b6a/v2/MI_CID_A_318_M_KittyWarrior_02/background.png",
              "full_background": "https://media.fortniteapi.io/images/cosmetics/0488639b1fd10e1af2fd228ac4996b6a/v2/MI_CID_A_318_M_KittyWarrior_02/info.en.png"
          }
      ],
      "firstReleaseDate": "2022-01-02",
      "previousReleaseDate": "2022-03-08",
      "giftAllowed": true,
      "buyAllowed": true,
      "price": {
          "regularPrice": 1400,
          "finalPrice": 1400
      },
      "rarity": {
          "id": "Rare",
          "name": "RARE"
      },
      "series": null,
      "banner": {
          "id": "PickaxeIncluded",
          "name": "Pickaxe Included!",
          "intensity": "High"
      },
      "offerTag": {
          "id": "kittywarriorinspect",
          "text": "Unsheathe the dual-wield <text color=\"FFFFFFFF\">NYAN CLAWS</> from <text color=\"FFFFFFFF\">AZUKI's</> scabbards when both are equipped!"
      },
      "granted": [
          {
              "id": "CID_A_318_Athena_Commando_M_KittyWarrior",
              "type": {
                  "id": "outfit",
                  "name": "Outfit"
              },
              "name": "Azuki",
              "description": "Wandering warrior destined to end the Whiskeria Wars.",
              "rarity": {
                  "id": "Rare",
                  "name": "RARE"
              },
              "series": null,
              "images": {
                  "icon": "https://media.fortniteapi.io/images/0488639b1fd10e1af2fd228ac4996b6a/transparent.png",
                  "featured": "https://media.fortniteapi.io/images/0488639b1fd10e1af2fd228ac4996b6a/full_featured.png",
                  "background": "https://media.fortniteapi.io/images/cosmetics/0488639b1fd10e1af2fd228ac4996b6a/v2/background.png",
                  "icon_background": "https://media.fortniteapi.io/images/cosmetics/0488639b1fd10e1af2fd228ac4996b6a/v2/icon_background.png",
                  "full_background": "https://media.fortniteapi.io/images/cosmetics/0488639b1fd10e1af2fd228ac4996b6a/v2/info.en.png"
              },
              "video": null,
              "audio": null,
              "gameplayTags": [
                  "Cosmetics.UserFacingFlags.HasVariants",
                  "Cosmetics.Filter.Season.19",
                  "Cosmetics.Source.ItemShop",
                  "Cosmetics.Set.KittyKungFu",
                  "SoundLibrary.ID.StepType.ShoesDress",
                  "SoundLibrary.ID.ClothingType.Generic",
                  "SoundLibrary.ID.HandType.Bare"
              ],
              "set": {
                  "id": "KittyKungFu",
                  "name": "Nyanjitsu",
                  "partOf": "Part of the Nyanjitsu set."
              }
          },
          {
              "id": "BID_931_KittyWarrior",
              "type": {
                  "id": "backpack",
                  "name": "BackBling"
              },
              "name": "Catana",
              "description": "Can't have the paws without the claws.",
              "rarity": {
                  "id": "Rare",
                  "name": "RARE"
              },
              "series": null,
              "images": {
                  "icon": "https://media.fortniteapi.io/images/107526b0aa16526b4e3b6614ad5ce81d/transparent.png",
                  "featured": null,
                  "background": "https://media.fortniteapi.io/images/cosmetics/107526b0aa16526b4e3b6614ad5ce81d/v2/background.png",
                  "icon_background": "https://media.fortniteapi.io/images/cosmetics/107526b0aa16526b4e3b6614ad5ce81d/v2/icon_background.png",
                  "full_background": "https://media.fortniteapi.io/images/cosmetics/107526b0aa16526b4e3b6614ad5ce81d/v2/info.en.png"
              },
              "video": null,
              "audio": null,
              "gameplayTags": [
                  "Cosmetics.Filter.Season.19",
                  "Cosmetics.UserFacingFlags.HasVariants",
                  "Cosmetics.Set.KittyKungFu"
              ],
              "set": {
                  "id": "KittyKungFu",
                  "name": "Nyanjitsu",
                  "partOf": "Part of the Nyanjitsu set."
              }
          },
          {
              "id": "Pickaxe_ID_726_KittyWarriorMale",
              "type": {
                  "id": "pickaxe",
                  "name": "Harvesting Tool"
              },
              "name": "Nyan Claws",
              "description": "Azuki's whisker-thin ancestral blade.",
              "rarity": {
                  "id": "Rare",
                  "name": "RARE"
              },
              "series": null,
              "images": {
                  "icon": "https://media.fortniteapi.io/images/c48f75b56c93999ab661a3b5ec48ff4b/transparent.png",
                  "featured": null,
                  "background": "https://media.fortniteapi.io/images/cosmetics/c48f75b56c93999ab661a3b5ec48ff4b/v2/background.png",
                  "icon_background": "https://media.fortniteapi.io/images/cosmetics/c48f75b56c93999ab661a3b5ec48ff4b/v2/icon_background.png",
                  "full_background": "https://media.fortniteapi.io/images/cosmetics/c48f75b56c93999ab661a3b5ec48ff4b/v2/info.en.png"
              },
              "video": null,
              "audio": null,
              "gameplayTags": [
                  "Cosmetics.Pickaxe.DualWield",
                  "Cosmetics.UserFacingFlags.HasVariants",
                  "Cosmetics.Filter.Season.19",
                  "Cosmetics.Set.KittyKungFu",
                  "Cosmetics.Source.ItemShop"
              ],
              "set": {
                  "id": "KittyKungFu",
                  "name": "Nyanjitsu",
                  "partOf": "Part of the Nyanjitsu set."
              }
          }
      ],
      "priority": -1,
      "section": {
          "id": "Featured",
          "name": "Featured",
          "landingPriority": 70
      },
      "groupIndex": 0,
      "storeName": "BRWeeklyStorefront",
      "tileSize": "Normal",
      "categories": [
          "Panel 01"
      ]
  },

  */