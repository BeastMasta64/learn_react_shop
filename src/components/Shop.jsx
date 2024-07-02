import { useEffect, useState } from "react";
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: { 'Authorization': API_KEY }
        }).then(response => response.json()).then((data) => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, []);
    return (
        <main className="container content">
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </main>
    )
}

export { Shop };

// {
//     "mainId": "AA_AcresFarm_Bundle",
//     "displayName": "Комплект «Акры Анархии»",
//     "displayDescription": "",
//     "displayType": "Комплект предметов",
//     "mainType": "bundle",
//     "offerId": "v2:/fb9079aa7f32b2778e73ecaad65941ac464b3f6b061eda6a141c7748aecaf661",
//     "devName": "[VIRTUAL]1 x Anarchy Barn Classic, 1 x Anarchy Barn Deluxe, 1 x Anarchy Loft Barn, 1 x Homestead Interiors, 1 x Rural Hospitality, 1 x Farmer's Favorites for -1 MtxCurrency",
//     "offerDates": {
//         "in": "2024-07-02T00:00:00.000Z",
//         "out": "2024-07-06T23:59:59.999Z"
//     },
//     "displayAssets": [
//         {
//             "displayAsset": "DAv2_Bundle_Featured_AA_AcresFarm",
//             "materialInstance": "MI_Bundle_Featured_AA_AcresFarm",
//             "primaryMode": "BattleRoyale",
//             "url": "https://media.fortniteapi.io/images/displayAssets/v2/BattleRoyale/DAv2_Bundle_Featured_AA_AcresFarm/MI_Bundle_Featured_AA_AcresFarm.png",
//             "flipbook": null,
//             "background_texture": null,
//             "background": "https://media.fortniteapi.io/images/shop/fb9079aa7f32b2778e73ecaad65941ac464b3f6b061eda6a141c7748aecaf661/v2/MI_Bundle_Featured_AA_AcresFarm/background.png",
//             "full_background": "https://media.fortniteapi.io/images/shop/fb9079aa7f32b2778e73ecaad65941ac464b3f6b061eda6a141c7748aecaf661/v2/MI_Bundle_Featured_AA_AcresFarm/info.ru.png"
//         },
//         {
//             "displayAsset": "DAv2_Bundle_Featured_AA_AcresFarm",
//             "materialInstance": "MI_Bundle_Featured_AA_AcresFarm",
//             "primaryMode": "MAX",
//             "url": "https://media.fortniteapi.io/images/displayAssets/v2/MAX/DAv2_Bundle_Featured_AA_AcresFarm/MI_Bundle_Featured_AA_AcresFarm.png",
//             "flipbook": null,
//             "background_texture": null,
//             "background": "https://media.fortniteapi.io/images/shop/fb9079aa7f32b2778e73ecaad65941ac464b3f6b061eda6a141c7748aecaf661/v2/MI_Bundle_Featured_AA_AcresFarm/background.png",
//             "full_background": "https://media.fortniteapi.io/images/shop/fb9079aa7f32b2778e73ecaad65941ac464b3f6b061eda6a141c7748aecaf661/v2/MI_Bundle_Featured_AA_AcresFarm/info.ru.png"
//         }
//     ],
//     "firstReleaseDate": "2024-04-25",
//     "previousReleaseDate": "2024-06-22",
//     "giftAllowed": true,
//     "buyAllowed": true,
//     "price": {
//         "regularPrice": 1000,
//         "finalPrice": 800,
//         "floorPrice": 200
//     },
//     "rarity": {
//         "id": "Uncommon",
//         "name": "НЕОБЫЧНЫЙ"
//     },
//     "series": null,
//     "banner": {
//         "id": "vbucksoff",
//         "name": "Скидка: 200 В-баксов",
//         "intensity": "Low"
//     },
//     "offerTag": null,
//     "granted": [
//         {
//             "id": "JBSID_AA_BarnMed_01",
//             "type": {
//                 "id": "building_set",
//                 "name": "Комплект LEGO®"
//             },
//             "name": "Классический амбар Акров",
//             "description": "",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "НЕОБЫЧНЫЙ"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/19796710964dfd3cfb343881d064bd3b/transparent.png",
//                 "featured": null,
//                 "background": "https://media.fortniteapi.io/images/cosmetics/19796710964dfd3cfb343881d064bd3b/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/19796710964dfd3cfb343881d064bd3b/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/19796710964dfd3cfb343881d064bd3b/v2/info.ru.png"
//             },
//             "juno": {
//                 "icon": null
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Juno.AccountItems.Unlock.BuildingSet.AnarchyAcres.BarnMed_01"
//             ],
//             "set": null
//         },
//         {
//             "id": "JBSID_AA_BarnMed_02",
//             "type": {
//                 "id": "building_set",
//                 "name": "Комплект LEGO®"
//             },
//             "name": "Роскошный амбар Акров",
//             "description": "",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "НЕОБЫЧНЫЙ"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/c4d20e2e1be7254db095b3b09c383a08/transparent.png",
//                 "featured": null,
//                 "background": "https://media.fortniteapi.io/images/cosmetics/c4d20e2e1be7254db095b3b09c383a08/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/c4d20e2e1be7254db095b3b09c383a08/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/c4d20e2e1be7254db095b3b09c383a08/v2/info.ru.png"
//             },
//             "juno": {
//                 "icon": null
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Juno.AccountItems.Unlock.BuildingSet.AnarchyAcres.BarnMed_02"
//             ],
//             "set": null
//         },
//         {
//             "id": "JBSID_AA_BarnMed_03",
//             "type": {
//                 "id": "building_set",
//                 "name": "Комплект LEGO®"
//             },
//             "name": "Комфортный амбар Акров",
//             "description": "",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "НЕОБЫЧНЫЙ"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/4d4546a9658c14add663e5b0c019d0b4/transparent.png",
//                 "featured": null,
//                 "background": "https://media.fortniteapi.io/images/cosmetics/4d4546a9658c14add663e5b0c019d0b4/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/4d4546a9658c14add663e5b0c019d0b4/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/4d4546a9658c14add663e5b0c019d0b4/v2/info.ru.png"
//             },
//             "juno": {
//                 "icon": null
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Juno.AccountItems.Unlock.BuildingSet.AnarchyAcres.BarnMed_03"
//             ],
//             "set": null
//         },
//         {
//             "id": "JBPID_AA_Brown",
//             "type": {
//                 "id": "building_prop",
//                 "name": "Украшения"
//             },
//             "name": "Сельские интерьеры",
//             "description": "",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "НЕОБЫЧНЫЙ"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/147eda3ee8ec331f71f606fd55ff1934/transparent.png",
//                 "featured": null,
//                 "background": "https://media.fortniteapi.io/images/cosmetics/147eda3ee8ec331f71f606fd55ff1934/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/147eda3ee8ec331f71f606fd55ff1934/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/147eda3ee8ec331f71f606fd55ff1934/v2/info.ru.png"
//             },
//             "juno": {
//                 "icon": null
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Juno.AccountItems.Unlock.BuildingProp.AnarchyAcres.Brown"
//             ],
//             "set": null
//         },
//         {
//             "id": "JBPID_AA_Red",
//             "type": {
//                 "id": "building_prop",
//                 "name": "Украшения"
//             },
//             "name": "Деревенское гостеприимство",
//             "description": "",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "НЕОБЫЧНЫЙ"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/2de16c412ce8c2be9bb08046816b26a5/transparent.png",
//                 "featured": null,
//                 "background": "https://media.fortniteapi.io/images/cosmetics/2de16c412ce8c2be9bb08046816b26a5/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/2de16c412ce8c2be9bb08046816b26a5/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/2de16c412ce8c2be9bb08046816b26a5/v2/info.ru.png"
//             },
//             "juno": {
//                 "icon": null
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Juno.AccountItems.Unlock.BuildingProp.AnarchyAcres.Red"
//             ],
//             "set": null
//         },
//         {
//             "id": "JBPID_AA_Outdoor",
//             "type": {
//                 "id": "building_prop",
//                 "name": "Украшения"
//             },
//             "name": "Любимые вещи земледельца",
//             "description": "",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "НЕОБЫЧНЫЙ"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/d6e2c06c6fe5281bbea3a6f276ffb5a0/transparent.png",
//                 "featured": null,
//                 "background": "https://media.fortniteapi.io/images/cosmetics/d6e2c06c6fe5281bbea3a6f276ffb5a0/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/d6e2c06c6fe5281bbea3a6f276ffb5a0/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/d6e2c06c6fe5281bbea3a6f276ffb5a0/v2/info.ru.png"
//             },
//             "juno": {
//                 "icon": null
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Juno.AccountItems.Unlock.BuildingProp.AnarchyAcres.Outdoor"
//             ],
//             "set": null
//         }
//     ],
//     "priority": -1,
//     "section": {
//         "id": "AnarchyAcres.99",
//         "name": "Акры Анархии",
//         "category": "Стройте с комплектами LEGO®",
//         "landingPriority": 0
//     },
//     "groupIndex": 0,
//     "storeName": "BRWeeklyStorefront",
//     "tileSize": "Size_3_x_2",
//     "categories": []
// },