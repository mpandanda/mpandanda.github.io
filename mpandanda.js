//PandandaGO! API
//Written by DJFang
//2016-2019

var songName = "";
var apiKey = "AIzaSyCTkn_yz1U-Y1CRU4yaAm7uPXCTVyTRapU";
var currentRoomName;
var prevRoomName = "EN_village";
var username;
var id = 1;
var nowPlaying = "No custom music available in this room";
var yays;
var isVIP = 1;
var nameglow;
var namecolor;
var bubbletextcolor;
var bubblecolor;
var myMood;
var bubbleParamsArray = new Array();
var showPlayerCardObj;
var moodglow;
var moodcolor;
var isJourneyActive = 0;
var radioToggle = false;
var roomPositions;
var partyProgress;
var musicFestStarts = 1501657200000;
var sailorsFestStarts = 1532502000000;
var petsInterval;
var furnitureDisplayed = "";
var nicknames = new Array();
var player;
const cinemaConfig = { autoplay: 1, controls: 0, iv_load_policy: 3, modestbranding: 1, disablekb: 1, fs: 0 };
var cinemaQueue = [];
var hasCinemaPlayed = false;
var nextVideoShift = false;
var hasSeekedVideo = false;
var hasLoadedVideoInfo = false;
var walkingPet;
var bunnyData = {"hasStarted": false, "bunnyPoints": 0, "blackBunnies": 0, "whiteBunnies": 0, "brownBunnies": 0};
var bunnyInterval;
var ghostData = {"hasStarted": false, "ghostPoints": 0};
var ghostInterval;
var slimeInterval;
var partySwitcherFestivalData = {
	"none": {
		"locations": []
	},
	"pumpkinfestival2016": {
		"locations": ["EN_community_center", "EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village"]
	},
	"winterfestival2016": {
		"locations": ["EN_treehouse", "EN_bunny_field", "EN_forest", "EN_fishing_hole", "EN_barn", "EN_harvest_grove", "EN_village", "EN_townsquare", "EN_townsquare2", "EN_orchard", "EN_stonehenge", "EN_treehouse_lobby", "player_treehouse"]
	},
	"snowy": {
		"locations": ["EN_community_center", "EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"marchofthesnowmen2017": {
		"locations": ["EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"tropicalbreak2017": {
		"locations": ["EN_barn", "EN_fishing_hole", "EN_harvest_grove", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"anniversary2017": {
		"locations": ["EN_icecream", "EN_library", "EN_treehouse_lobby", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"friendshipfestival2017": {
		"locations": ["EN_harvest_grove", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"easterfestival2017": {
		"locations": ["EN_fishing_hole", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"earthday2017": {
		"locations": ["EN_village"]
	},
	"backgroundweek2017": {
		"locations": ["EN_village"]
	},
	"moonfestival2017": {
		"locations": ["EN_village", "EN_stonehenge", "EN_party1", "EN_icecream"]
	},
	"waterday2017": {
		"locations": ["EN_village", "EN_fishing_hole"]
	},
	"campday2017": {
		"locations": ["EN_village", "EN_icecream"]
	},
	"musicfestival2017": {
		"locations": ["EN_village", "EN_icecream", "EN_barn", "EN_beach", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_party1", "EN_purple_door", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_village"]
	},
	"harvestfestival2017": {
		"locations": ["EN_community_center", "EN_fishing_hole", "EN_harvest_grove", "EN_icecream", "EN_orchard", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"pumpkinfestival2017": {
		"locations": ["EN_community_center", "EN_barn", "EN_bunny_field", "EN_clothes_store", "EN_fishing_hole", "EN_harvest_grove", "EN_icecream", "EN_purple_door", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "EN_beach", "EN_forest", "EN_orchard"]
	},
	"thanksgiving2017": {
		"locations": ["EN_townsquare", "EN_village"]
	},
	"winterfestival2017": {
		"locations": ["EN_clothes_store", "EN_community_center", "EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"marchofthesnowmen2018": {
		"locations": ["EN_community_center", "EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"winterolympics2018": {
		"locations": ["EN_community_center", "EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"tropicalbreak2018": {
		"locations": ["EN_barn", "EN_community_center", "EN_fishing_hole", "EN_harvest_grove", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"superbowl2018": {
		"locations": ["EN_community_center", "EN_fishing_hole", "EN_harvest_grove", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"anniversary2018": {
		"locations": ["EN_community_center", "EN_icecream", "EN_library", "EN_townsquare", "EN_townsquare2", "EN_village", "EN_treehouse_lobby"]
	},
	"friendshipfestival2018": {
		"locations": ["EN_community_center", "EN_townsquare", "EN_townsquare2", "EN_village", "EN_harvest_grove"]
	},
	"aprilfools2018": {
		"locations": ["EN_village", "EN_fishing_hole"]
	},
	"easterfestival2018": {
		"locations": ["EN_community_center", "EN_village", "EN_fishing_hole", "EN_townsquare", "EN_townsquare2"]
	},
	"summerrefresh2018": {
		"locations": ["EN_village", "EN_townsquare", "EN_townsquare2"]
	},
	"footballfestival2018": {
		"locations": ["EN_village", "EN_townsquare", "EN_townsquare2", "EN_barn", "EN_beach", "EN_bunny_field", "EN_fishing_hole", "EN_harvest_grove", "EN_orchard", "EN_stonehenge"]
	},
	"sailorsfestival2018": {
		"locations": ["EN_icecream", "EN_townsquare", "EN_townsquare2", "EN_village", "EN_bunny_field", "EN_fishing_hole", "EN_stonehenge", "EN_treehouse_lobby"]
	},
	"4thofjuly2018": {
		"locations": ["EN_icecream", "EN_townsquare", "EN_village"]
	},
	"summerfestival2018": {
		"locations": ["EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_harvest_grove", "EN_icecream", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"harvestfestival2018": {
		"locations": ["EN_fishing_hole", "EN_harvest_grove", "EN_icecream", "EN_orchard", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"petpeeve2018": {
		"locations": ["EN_village", "EN_townsquare", "EN_townsquare2", "EN_fishing_hole"]
	},
	"10anniversary": {
		"locations": ["EN_community_center", "EN_townsquare", "EN_townsquare2", "EN_icecream", "EN_village"]
	},
	"pumpkinfestival2018": {
		"locations": ["EN_petstore", "EN_purple_door", "EN_treehouse_lobby", "EN_community_center", "EN_barn", "EN_bunny_field", "EN_clothes_store", "EN_fishing_hole", "EN_harvest_grove", "EN_icecream", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "EN_beach", "EN_forest", "EN_orchard"]
	},
	"thanksgiving2018": {
		"locations": ["EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"marchofthesnowmen22018": {
		"locations": ["EN_community_center", "EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"winterfestival2018": {
		"locations": ["EN_community_center", "EN_beach", "EN_barn", "EN_bunny_field", "EN_clothes_store", "EN_icecream", "EN_faraway_desert", "EN_lighthouse_island", "EN_starfish_island", "EN_palm_island", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"candyfestival2019": {
		"locations": ["EN_icecream", "EN_community_center", "EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village", "player_treehouse"]
	},
	"tropicalbreak2019": {
		"locations": ["EN_townsquare", "EN_townsquare2", "EN_village", "EN_barn", "EN_harvest_grove", "EN_icecream", "EN_fishing_hole"]
	},
	"anniversary2019": {
		"locations": ["EN_townsquare", "EN_townsquare2", "EN_village", "EN_community_center", "EN_treehouse_lobby", "EN_icecream"]
	},
	"friendshipfestival2019": {
		"locations": ["EN_townsquare", "EN_townsquare2", "EN_village", "EN_fishing_hole", "EN_harvest_grove"]
	},
	"stpatrick2019": {
		"locations": ["EN_village", "EN_community_center"]
	},
	"dragonfestival2019": {
		"locations": ["EN_village", "EN_community_center", "EN_beach", "EN_faraway_desert", "EN_fishing_hole", "EN_orchard", "EN_townsquare", "OW_town1"]
	},
	"easterfestival2019": {
		"locations": ["EN_village", "EN_community_center", "EN_fishing_hole", "EN_stonehenge", "EN_townsquare", "EN_townsquare2"]
	},
	"equestrian2019": {
		"locations": ["EN_village", "EN_community_center", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2"]
	},
	"desertexploration2019": {
		"locations": ["EN_faraway_desert", "EN_party1"]
	},
	"summerfestival2019": {
		"locations": ["EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_harvest_grove", "EN_icecream", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"junglefestival2019": {
		"locations": ["EN_barn", "EN_bunny_field", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_icecream", "EN_orchard", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_village"]
	},
	"backgroundweek2019": {
		"locations": ["EN_icecream", "EN_village"]
	},
	"harvestfestival2019": {
		"locations": ["EN_icecream", "EN_village", "EN_fishing_hole", "EN_harvest_grove", "EN_orchard", "EN_townsquare", "EN_townsquare2"]
	},
	"pandandafestival2019": {
		"locations": ["OW_town1", "EN_barn", "EN_beach", "EN_bunny_field", "EN_clothes_store", "EN_community_center", "EN_faraway_desert", "EN_fishing_hole", "EN_forest", "EN_harvest_grove", "EN_icecream", "EN_library", "EN_orchard", "EN_petstore", "EN_purple_door", "EN_stonehenge", "EN_townsquare", "EN_townsquare2", "EN_treehouse", "EN_treehouse_lobby", "EN_village"]
	},
};

function playComposer(arr)
{
	thisMovie('mpandanda').roomPositions([arr]);
}

function hasItem(itemID) {
	var clothesarr = String(getCookie("closet")).split(",");
	var mountsarr = String(getCookie("mounts")).split(",");
	var clothestst = clothesarr.indexOf(itemID);
	var mountst = mountsarr.indexOf(itemID);
	if(clothestst != -1)
	{
		return true;
	}
	else if(mountst != -1)
	{
		return true;
	}
	return false;
}

function ghostAction()
{
	if(ghostData["hasStarted"]) 
	{
		thisMovie("mpandanda").communityGame("ghostGame", {"cmd2": "end"});
		thisMovie("mpandanda").communityGame("ghostGame", {"cmd2": "scores", "scores": "1," + username + "," + String(ghostData.ghostPoints) + ";"});
		ghostData = {"hasStarted": false, "ghostPoints": 0};
	}
	else 
	{
		ghostData["hasStarted"] = true;
		thisMovie("mpandanda").communityGame("ghostGame", {"cmd2": "start", "slimeStart":"0,785,10;1,309,13", "slimeMove":"0,583,331;1,645,493"});
		slimeInterval = setInterval(moveSlimes, 3000);
	}
	
}

function removeBackpackItem(itemID) {
	var wasItemFound = false;
	var backpackarr = String(getCookie("backpack")).split(",");
	var storagearr = String(getCookie("storage")).split(",");
	var furniturearr = String(getCookie("furniture")).split(",");
	var clothesarr = String(getCookie("closet")).split(",");
	var mountsarr = String(getCookie("mounts")).split(",");
	var backpacktst = backpackarr.indexOf(itemID);
	var storagetst = storagearr.indexOf(itemID);
	var clothestst = clothesarr.indexOf(itemID);
	var mountst = mountsarr.indexOf(itemID);
	if(backpacktst != -1)
	{
		backpackarr.splice(backpacktst, 1);
		wasItemFound = true;
	}
	else if(storagetst != -1)
	{
		storagearr.splice(storagetst, 1);
		for(var furnitureItems in furniturearr)
		{
			if(furniturearr[furnitureItems].indexOf(String(itemID) + ":") != -1)
			{
				furniturearr.splice(furnitureItems, 1);
				break;
			}
		}
		wasItemFound = true;
	}
	else if(clothestst != -1)
	{
		clothesarr.splice(clothestst, 1);
		wasItemFound = true;
	}
	else if(mountst != -1)
	{
		mountsarr.splice(mountst, 1);
		wasItemFound = true;
	}
	setCookie("backpack", backpackarr.join(","), 3000);
	setCookie("storage", storagearr.join(","), 3000);
	setCookie("furniture", furniturearr.join(","), 3000);
	setCookie("closet", clothesarr.join(","), 3000);
	setCookie("mounts", mountsarr.join(","), 3000);
	return wasItemFound;
}

function moveSlimes() {
	var SlimeCoords1 = String(getRandomCoord(200,800) +","+ (getRandomCoord(200,500)));
	var SlimeCoords2 = String(getRandomCoord(200,800) +","+ (getRandomCoord(200,500)));
	thisMovie("mpandanda").communityGame("ghostGame", {"cmd2": "update", "slimeMove":"0," + SlimeCoords1 + ";1," + SlimeCoords2});
}

function getRandomCoord(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bunnyChaseAction()
{
	if(bunnyData["hasStarted"]) 
	{
		thisMovie("mpandanda").communityGame("bunnyGame", {"cmd2": "end"});
		thisMovie("mpandanda").communityGame("bunnyGame", {"cmd2": "scores", "scores": "1," + username + "," + String(bunnyData.whiteBunnies) + "," + String(bunnyData.brownBunnies) + "," + String(bunnyData.blackBunnies) + "," + String(bunnyData.bunnyPoints) + ";"});
		bunnyData = {"hasStarted": false, "bunnyPoints": 0, "blackBunnies": 0, "whiteBunnies": 0, "brownBunnies": 0};
	}
	else 
	{
		bunnyData["hasStarted"] = true;
		thisMovie("mpandanda").communityGame("bunnyGame", {"cmd2": "start"});
	}
	
}

function readUserData()
{
	if(!getCookie("closet")) setCookie("closet", "", 3000);
	if(!getCookie("storage")) setCookie("storage", "", 3000);
	if(!getCookie("furniture")) setCookie("furniture", "", 3000);
	if(!getCookie("backpack")) setCookie("backpack", "", 3000);
	if(!getCookie("mounts")) setCookie("mounts", "", 3000);
	if(!getCookie("cardColor")) setCookie("cardColor", 1, 3000);
	if(!getCookie("partySwitcher")) setCookie("partySwitcher", 0, 3000);
	if(!getCookie("pets")) setCookie("pets", "", 3000);
	removeFestivalQuests();
	if(!getCookie("questsUpdated")) 
	{
		setCookie("questsUpdated", true, ((24 * 60 * 60 - new Date().getHours() * 60 * 60 - new Date().getMinutes() * 60 - new Date().getSeconds()) * 1000));
		setCookie("qAvailable", getAvailableQuests(), 3000);
	}
	if(!getCookie("qActive")) setCookie("qActive", "", 3000);
	if(!getCookie("qItems")) setCookie("qItems", "", 3000);
	if(!getCookie("tickets")) setCookie("tickets", 0, 3000);
	if(!getCookie("nc")) setCookie("nc", "0x2253a7", 3000);
	if(!getCookie("ng")) setCookie("ng", "", 3000);
	if(!getCookie("bc")) setCookie("bc", "0x62b611", 3000);
	if(!getCookie("btc")) setCookie("btc", "0xffffff", 3000);
	setupNGNC(getCookie("ng"), getCookie("nc"), getCookie("btc"), getCookie("bc"));
	if(!getCookie("pc")) setCookie("pc", 0, 3000);
	if(!getCookie("pw")) setCookie("pw", "", 3000);
	document.getElementById("partySwitcher").selectedIndex = Number(getCookie("partySwitcher"));
	pushFestivalQuests();
	return { closet: getCookie("closet"), storage: getCookie("storage"), backpack: getCookie("backpack"), mounts: getCookie("mounts"), cardColor: getCookie("cardColor"), qAvailable: getCookie("qAvailable"), qItems: getCookie("qItems"), qActive: getCookie("qActive"), tickets: getCookie("tickets"), furniture: getCookie("furniture") };
}

function adoptPet(petId, petName)
{
	var petcolor = Number(petId.split("t")[1]);
	var date = new Date();
	var rightNow = date.getFullYear() + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
	var newpet = {"name": petName, "color": petcolor, "birthday": rightNow};
	var petsArr = getCookie("pets").split("|");
	if(!getCookie("pets"))
	{
		setCookie("pets", String(username + "," + petName + "," + String(petcolor) + ",02/12/2016,1324,100:100:100,0,0"), 3000);
	}
	else 
	{
		petsArr.push(username + "," + petName + "," + String(petcolor) + ",02/12/2016,1324,100:100:100,0,0");
		var petString = String(petsArr.join("|"));
		setCookie("pets", petString, 3000);
	}
	return JSON.stringify(newpet);
}
function partySwitcherChanged()
{
	setCookie("partySwitcher", document.getElementById("partySwitcher").selectedIndex, 3000);
	try 
	{ 
		thisMovie("mpandanda").killClient(); 
		document.getElementById("partySwitcher").style.visibility = "hidden";
	} catch(e) {}
}

function getPartySwitcherValue()
{
	return document.getElementById("partySwitcher").value;
}

function playThMusic(ytId) 
{

	var playUrl = "https://www.googleapis.com/youtube/v3/videos?id=" + ytId + "&key="+ apiKey + "&fields=items(snippet(title))&part=snippet";
	if(ytId.indexOf("list=") != -1)
	{
		var ytarr = ytId.split("&");
		for(var arrz in ytarr)
		{
			if(ytarr[arrz].indexOf("list=") != -1)
			{
				playUrl = "https://www.googleapis.com/youtube/v3/playlists?id=" + ytarr[arrz].replace("list=", "") + "&key="+ apiKey + "&fields=items(snippet(title))&part=snippet";
				break;
			}
		}
	}
	$.ajax({
		url: playUrl, 
		dataType: "jsonp",
		success: function(data){
			if(data.items.length > 0)
			{
				if(ytId.indexOf("list=") == -1)
				{
					endThMusic();
					thisMovie("mpandanda").controlMusic(false);
					controlRadio(false);
					songName = data.items[0].snippet.title;
					nowPlaying = String(songName);
					ifrm = document.createElement("IFRAME");
					ifrm.setAttribute("id", "ifrm");
					ifrm.setAttribute("src", "https://www.youtube.com/embed/" + ytId + "?autoplay=1&loop=1&playlist=" + ytId);
					ifrm.style.width = 1+"px";
					ifrm.style.height = 1+"px";
					ifrm.setAttribute("frameborder", "0");
					ifrm.setAttribute("allow", "encrypted-media,autoplay");
					document.body.appendChild(ifrm);
					try
					{
						thisMovie("mpdapi").setTreeHMusic(true);
					} catch(e) {}
					if(isMyTreehouse())
					{
						pandandaCommunicate("CUSTOM_HANDLING;SET_TH_MUSIC:" + ytId);
					}
				}
				else
				{
					endThMusic();
					thisMovie("mpandanda").controlMusic(false);
					controlRadio(false);
					songName = data.items[0].snippet.title;
					nowPlaying = String(songName);
					ifrm = document.createElement("IFRAME");
					ifrm.setAttribute("id", "ifrm");
					var ytPlaylistStr = ytId;
					if(ytPlaylistStr.indexOf("autoplay=0") != -1)
					{
						ytPlaylistStr = ytPlaylistStr.replace("autoplay=0", "autoplay=1");
					}
					else if(ytPlaylistStr.indexOf("autoplay") == -1)
					{
						ytPlaylistStr = ytPlaylistStr + "&autoplay=1";
					}
					if(ytPlaylistStr.indexOf("loop=0") != -1)
					{
						ytPlaylistStr = ytPlaylistStr.replace("loop=0", "loop=1");
					}
					else if(ytPlaylistStr.indexOf("loop") == -1)
					{
						ytPlaylistStr = ytPlaylistStr + "&loop=1";
					}
					console.log(ytPlaylistStr);
					ifrm.setAttribute("src", "https://www.youtube.com/embed/videoseries?" + ytPlaylistStr);
					ifrm.style.width = 1+"px";
					ifrm.style.height = 1+"px";
					ifrm.setAttribute("frameborder", "0");
					ifrm.setAttribute("allow", "encrypted-media,autoplay");
					document.body.appendChild(ifrm);
					try
					{
						thisMovie("mpdapi").setTreeHMusic(true);
					} catch(e) {}
					if(isMyTreehouse())
					{
						pandandaCommunicate("CUSTOM_HANDLING;SET_TH_MUSIC:" + ytId);
					}
				}
			}
			else
			{
				try
				{
					thisMovie("mpdapi").setTreeHMusic(false);
				} catch(e) {}
			}
		},
		error: function(jqXHR, textStatus, errorThrown) 
		{
			try
			{
				thisMovie("mpdapi").setTreeHMusic(false);
			} catch(e) {}
		}
	});
}

function closeExtrasPanel()
{
	thisMovie("mpdapi").closeExtrasPanel();
}

function endThMusic() 
{
	
	var iframes = document.querySelectorAll('iframe');
	for (var i = 0; i < iframes.length; i++) {
		if(iframes[i].getAttribute('id') == "ifrm")
		{
			iframes[i].parentNode.removeChild(iframes[i]);
		}
	}
	nowPlaying = "No custom music available in this room";
	if(radioToggle != false) { controlRadio(true); }
	if(currentRoomName != "EN_cinema") 
	{
		hasCinemaPlayed = false;
		nextVideoShift = false;
		hasSeekedVideo = false;
		hasLoadedVideoInfo = false;
		cinemaQueue = [];
		try
		{
			player.destroy();
		} catch(e) {}
	}
}

function toggleRadio(boolPls)
{
	try
	{
		if(boolPls == true)
		{
			radioToggle = true;
		}
		else
		{
			radioToggle = false;
		}
	}
	catch(error)
	{
		console.log(error);
	}
}

function controlRadio(controlBool)
{
	try
	{
		if(controlBool == true)
		{
			document.getElementById("mpandandaRadio").src = "https://radio.mpandanda.eu/mpdn.mp3";
			document.getElementById("mpandandaRadio").play();
		}
		else
		{
			document.getElementById("mpandandaRadio").src = "";
		}
	}
	catch(error)
	{
		
	}
}
function pandandaCommunicate(paramsToSend)
{
	var paramSend = String(paramsToSend);
	if(paramSend.indexOf("CUSTOM_HANDLING;") == -1)
	{
		paramSend = "CUSTOM_HANDLING;" + paramSend;
	}
	thisMovie("mpandanda").pandandaCommunicator(paramSend);
}

function showGameAlert(alerttitle, alertmsg)
{
	thisMovie("mpdapi").sendmPandandaAlert(String(alerttitle), String(alertmsg));
}
function fetchMention(object)
{
	var usertxta = object.usertxt;
	var msgtxta = object.msgtxt;
	thisMovie("mpandanda").sendFetchMention(String(usertxta), String(msgtxta));
	console.log("user:" + usertxta + " msg:" + msgtxta);
}
function roomMagic(object)
{
	var odata = object.objdata;
	var otype = object.type;
	thisMovie("mpandanda").sendRoomMagic(String(odata), String(otype));
}
function triggerExtras()
{
	try
	{
		thisMovie("mpdapi").openExtrasPanel();
	} catch(e) {}
	pandandaExternalInterfaceController("enable");
}
function fetchMood(username, mood, moodcolor, moodglow)
{
	if(mood != null)
	{
		thisMovie("mpandanda").moodFetcher(username, mood, moodcolor, moodglow);
	}
}

function closeNewspaper()
{
	thisMovie("mpandanda").closeNewspaper();
}

function pandandaExternalInterfaceController(whatodo)
{
	if(String(whatodo) == "enable")
	{
		selectDiv("mpdapiswf").style.visibility = "visible";
		selectDiv("mpdapiswf").style.pointerEvents = "auto";
	}
	else if(String(whatodo) == "disable")
	{
		selectDiv("mpdapiswf").removeAttribute("style");
	}
	else if(String(whatodo) == "hide")
	{
		selectDiv("mpdapiswf").removeAttribute("style");
	}
	else if(String(whatodo) == "disableAfterAlert")
	{
		selectDiv("mpdapiswf").removeAttribute("style");
	}
}

function thisMovie(movieName)
{
	if (navigator.appName.indexOf("Microsoft") != -1) 
	{
		 return window[movieName];
	} 
	else 
	{
		return document[movieName];
	}
}

function selectDiv(divName) 
{
	if (navigator.appName.indexOf("Microsoft") != -1) 
	{
		 return window.querySelector("#" + divName);
	} 
	else 
	{
		return document.querySelector("#" + divName);
	}
}

function modifyVariable(varName, varValue)
{
	if(String(varName) == "currentRoomName" && currentRoomName) prevRoomName = currentRoomName;
	window[String(varName)] = varValue;
	if(String(varName) == "currentRoomName") 
	{
		furnitureDisplayed = getCookie("furniture");
		document.getElementById("partySwitcher").style.visibility = "visible";
		if(currentRoomName.indexOf("TH_") != -1) petsInterval = setInterval(updatePets, 3000);
		else clearInterval(petsInterval);
	}
	if(String(varName) == "currentRoomName" && String(document.getElementById("partySwitcher").value).indexOf("musicfestival2017") != -1) thisMovie("mpandanda").nowPlayingRoom(currentRoomName);
	if(String(varName) == "currentRoomName" && String(varValue) == "EN_bunny_field") bunnyInterval = setInterval(bunnyChaseAction, 30000);
	else if(String(varName) == "currentRoomName" && String(varValue) != "EN_bunny_field") clearInterval(bunnyInterval);
	if(String(varName) == "currentRoomName" && String(varValue) == "EN_graveyard") ghostInterval = setInterval(ghostAction, 30000);
	else if(String(varName) == "currentRoomName" && String(varValue) != "EN_graveyard") 
	{
		clearInterval(ghostInterval);
		clearInterval(slimeInterval);
	}
	if(String(varName) == "currentRoomName" && String(varValue) == "minigame") controlRadio(false);
}

function getNowPlaying()
{
	return nowPlaying;
}

function isMyTreehouse()
{
	if(currentRoomName.split("_")[1].toLowerCase() == username.toLowerCase())
	{
		return true;
	}
	return false;
}

function setYoutubeSong(yturl)
{
	if(yturl.indexOf("youtube.com/watch") == -1 && yturl.indexOf("youtu.be/") == -1)
	{
		return false;
	}
	else
	{
		if(yturl.indexOf("youtube.com/watch") != -1 && yturl.indexOf("&list") != -1)
		{
			var youtubeVidArray = yturl.split("youtube.com/watch?")[1].split("&");
			var ytString = "";
			for(var i in youtubeVidArray)
			{
				if(youtubeVidArray[i].indexOf("index=") != -1)
				{
					var newIndex = Number(youtubeVidArray[i].split("index=")[1]) - 1;
					youtubeVidArray[i] = "index=" + newIndex;
				}
				if(youtubeVidArray[i].indexOf("v=") == -1)
				{
					ytString = ytString + "&" + youtubeVidArray[i];
				}
			}
			playThMusic(ytString.substr(1));
		}
		else if(yturl.indexOf("youtu.be/") != -1)
		{
			var youtubeVidID = yturl.split("youtu.be/")[1].substr(0, 11);
			playThMusic(youtubeVidID);
		}
		else
		{
			var youtubeVidID = yturl.split("youtube.com/watch?v=")[1].substr(0, 11);
			playThMusic(youtubeVidID);
		}
	}
}

function removeYoutubeSong()
{
	endThMusic();
	nowPlaying = "No custom music available in this room";
	pandandaCommunicate("CUSTOM_HANDLING;SET_TH_MUSIC:00");
}

function pushBubbleParams(bc, btc, name)
{
	name = String(name);
	bubbleParamsArray[name] = [];
	bubbleParamsArray[name]["bc"] = String(bc);
	bubbleParamsArray[name]["btc"] = btc;
}

function getVariable(varname, optionalParam1)
{
	var getVarReply;
	switch(String(varname))
	{
		case "appendText":
			var optparam = String(optionalParam1);
			if(optparam in nicknames)
			{
				if("appendText" in nicknames[optparam])
				{
					getVarReply = nicknames[optparam]["appendText"];
				}
				else
				{
					getVarReply = "";
				}
			}
			else
			{
				getVarReply = "";
			}
			break;
		case "nickname":
			var optparam = String(optionalParam1);
			if(optparam in nicknames)
			{
				if("nickname" in nicknames[optparam])
				{
					getVarReply = nicknames[optparam]["nickname"];
				}
				else
				{
					getVarReply = "";
				}
			}
			else
			{
				getVarReply = "";
			}
			break;
		case "bc":
			var optparam = String(optionalParam1);
			if(optparam in bubbleParamsArray)
			{
				if("bc" in bubbleParamsArray[optparam])
				{
					getVarReply = bubbleParamsArray[optparam]["bc"];
				}
				else
				{
					getVarReply = "";
				}
			}
			else
			{
				getVarReply = "";
			}
			break;
		
		case "btc":
			var optparam = String(optionalParam1);
			if(optparam in bubbleParamsArray)
			{
				if("btc" in bubbleParamsArray[optparam])
				{
					getVarReply = bubbleParamsArray[optparam]["btc"];
				}
				else
				{
					getVarReply = "";
				}
			}
			else
			{
				getVarReply = "";
			}
			break;
			
		default:
			getVarReply = window[varname];
		
	}
	
	return getVarReply;
}

function setupVIP()
{
	isVIP = 1;
}

function setupNGNC(ng, nc, btc, bc)
{
	nameglow = String(ng);
	namecolor = String(nc);
	bubbletextcolor = String(btc);
	bubblecolor = String(bc);
}

function updateVariable(varName, varParam)
{
	window[varName] = varParam;
}

function savemPandandaGlows()
{
	if(!isNaN(parseInt(namecolor, 16)) && namecolor != "0xfffffff") setCookie("nc", namecolor, 3000);
	else setCookie("nc", "", 3000);
	if(!isNaN(parseInt(namecolor, 16)) && nameglow != "0xfffffff") setCookie("ng", nameglow, 3000);
	else setCookie("ng", "", 3000);
	if(!isNaN(parseInt(namecolor, 16)) && bubblecolor != "0xfffffff") setCookie("bc", bubblecolor, 3000);
	else setCookie("bc", "", 3000);
	if(!isNaN(parseInt(namecolor, 16)) && bubbletextcolor != "0xfffffff") setCookie("btc", bubbletextcolor, 3000);
	else setCookie("btc", "", 3000);
	try { thisMovie("mpandanda").killClient(); } catch(e) {}
}

function checkForVIP()
{
	if(isVIP == 1)
	{
		return true;
	}
	else
	{
		showGameAlert("VIP Required", "Using VIP perks requires VIP, which never expires. To learn more, or buy it, click the Market button above the game.");
		return false;
	}
}

function initMood(object)
{
	myMood = object.mood;
	moodglow = object.moodglow;
	moodcolor = object.moodcolor;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if(cname != "questsUpdated") d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	else d.setTime(d.getTime() + exdays);
    var expires = "expires="+d.toUTCString();
	if(!username) username = "pandandago";
    document.cookie = username.toLowerCase() + cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	if(!username) username = "pandandago";
    var name = username.toLowerCase() + cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cookieName) {
    var cookieValid = getCookie(String(cookieName));
    if (cookieValid != "") {
        return getCookie(cookieName);
    } else {
        return false;
    }
}

function activeJourney(obj)
{
	isJourneyActive = Number(obj.palmIsland);
}

function updatePositions(obj)
{
	roomPositions = obj.pos;
	thisMovie("mpandanda").roomPositions(roomPositions);
}

function updatePartyProgress(obj)
{
	partyProgress = obj.progress;
}

function updateLily(obj)
{
	thisMovie("mpandanda").updateLily(obj.timeLeft);
}

function showmPDDialogue(obj)
{
	thisMovie("mpandanda").showDialogue(Number(obj.showDia));
}

function pushNickname(obj)
{
	var nameId = String(obj.name);
	nicknames[nameId] = [];
	nicknames[nameId]["nickname"] = String(obj.nickname);
	nicknames[nameId]["appendText"] = String(obj.appendText);
}

function getIceCream(obj)
{
	thisMovie("mpandanda").getIceCream(null);
}

function donationsChestReply(obj)
{
	thisMovie("mpandanda").donationsChestReply(obj.itemsList, obj.boughtToday);
}

function updatePets()
{
	try { thisMovie("mpandanda").updatePets();} catch(e) {}
}

function getPlacedFurnitureList()
{
	return thisMovie("mpandanda").getFurnitureList();
}

function countOccurrencesInArray(arr, obj)
{
    var count = arr.length;
    if(typeof(obj) !== "undefined"){
        var array = arr.slice(0), count = 0;
        for(i = 0; i < array.length; i++){
            if(array[i] == obj){
                count++;
            }
        }
    }
    return count;
}

function pushFurnitureDisplayed(obj)
{
	furnitureDisplayed = String(obj.furniture);
}

function petDaycareReply(obj)
{
	thisMovie("mpandanda").petDaycareReply(Number(obj.gold), String(obj.pets));
}

function codeRedeemed(obj)
{
	thisMovie("mpandanda").codeRedeemed(String(obj.items));
}
function loadCinema(obj)
{
	cinemaQueue = obj.queue;
	if(String(document.getElementById('youtubeframe')).toLowerCase().indexOf("iframe") == -1)
	{
		player = new YT.Player('youtubeframe', 
		{ 
			videoId: obj.video,
			height: '360',
			width: '640',
			events: 
			{
				'onStateChange': videoStateChange
			},
			playerVars: cinemaConfig
		}
		);
	}
	else
	{
		player.cueVideoById({videoId:obj.video});
		player.playVideo();
	}
	try
	{
		thisMovie("mpandanda").videoReported(false);
	} catch(e) {}
	try
	{
		player.unMute();
	} catch(e) {}
	selectDiv("youtubeframe").style.visibility = "visible";
}
function videoStateChange(event)
{
	if(event.data == 0)
	{
		if(!nextVideoShift) cinemaQueue.splice(0, 1);
		else nextVideoShift = false;
		if(cinemaQueue[0])
		{
			player.cueVideoById({videoId:cinemaQueue[0].videoId});
			player.playVideo();
			try
			{
				thisMovie("mpandanda").videoReported(false);
			} catch(e) {}
			player.unMute();
		}
		else
		{
			stopCinema();
		}
		hasSeekedVideo = false;
		hasLoadedVideoInfo = false;
		var responseObject = {}
		responseObject.cmd = "queueResponse";
		responseObject.queue = cinemaQueue;
		responseObject.isMine = false;
		try
		{
			thisMovie("mpandanda").cinemaUIResponse(responseObject);
		} catch(e) {}
	}
	else if(event.data == 1)
	{
		if(hasCinemaPlayed)
		{
			var responseObject = {}
			responseObject.cmd = "queueResponse";
			responseObject.queue = cinemaQueue;
			responseObject.isMine = false;
			try
			{
				thisMovie("mpandanda").cinemaUIResponse(responseObject);
			} catch(e) {}
		}
		if(!hasCinemaPlayed)
		{
			thisMovie("mpandanda").hideScreen();
			thisMovie("mpandanda").movieStarted();
			hasCinemaPlayed = true;
		}
		if((new Date().valueOf() - cinemaQueue[0].videoStarted) > 15000 && !hasSeekedVideo) 
		{
			player.seekTo(Math.floor((new Date().valueOf() - cinemaQueue[0].videoStarted) / 1000), true);
			hasSeekedVideo = true;
		}
		else hasSeekedVideo = true;
	}
}
function stopCinema(obj)
{
	player.stopVideo();
	selectDiv("youtubeframe").style.visibility = "hidden";
	cinemaQueue = [];
	hasLoadedVideoInfo = false;
	hasCinemaPlayed = false;
	nextVideoShift = false;
	hasSeekedVideo = false;
	thisMovie("mpandanda").showScreen();
	thisMovie("mpandanda").movieEnded();
}

function requestCinemaVideo(yturl)
{
	var responseObject = {};
	if(yturl.indexOf("youtube.com/watch") == -1 && yturl.indexOf("youtu.be/") == -1)
	{
		responseObject.cmd = "error";
		responseObject.errorText = "Invalid YouTube URL.";
		thisMovie("mpandanda").cinemaUIResponse(responseObject);
	}
	else
	{
		var userVideoName = "";
		var duration = "";
		youtubeVidID = ""
		if(yturl.indexOf("youtu.be/") != -1)
		{
			
			youtubeVidID = yturl.split("youtu.be/")[1].substr(0, 11);
		}
		else if(yturl.indexOf("youtube.com/watch") != -1)
		{
			youtubeVidID = yturl.split("youtube.com/watch?v=")[1].substr(0, 11);
		}
		else
		{
			return;
		}
		var playUrl = "https://www.googleapis.com/youtube/v3/videos?id=" + youtubeVidID + "&key="+ apiKey + "&fields=items(snippet(title),contentDetails(duration,contentRating(ytRating)))&part=snippet,contentDetails";
		$.ajax({
			url: playUrl, 
			dataType: "jsonp",
			success: function(data){
				if(data.items.length > 0)
				{
					try
					{
						userVideoName = transl(String(data.items[0].snippet.title));	
					} 
					catch(e)
					{
						responseObject.cmd = "error";
						responseObject.errorText = "The Cinema currently has issues with processing videos.";
						thisMovie("mpandanda").cinemaUIResponse(responseObject);
						return;
					}
					duration = String(data.items[0].contentDetails.duration).split("PT")[1];
					if(duration.indexOf("M") == -1) duration = "0M" + duration;
					try
					{
						if(data.items[0].contentDetails.contentRating.ytRating)
						{
							responseObject.cmd = "error";
							responseObject.errorText = "Age-restricted videos are not allowed.";
							thisMovie("mpandanda").cinemaUIResponse(responseObject);
							return;
						}
					} catch(e) {}
					pandandaCommunicate("REQUEST_CINEMA_VIDEO:" + youtubeVidID + "`~`1`~`" + userVideoName + "`~`1`~`" + duration);
					return;
				}
				else
				{
					responseObject.cmd = "error";
					responseObject.errorText = "An error has occurred.";
					thisMovie("mpandanda").cinemaUIResponse(responseObject);
					return;
				}
			},
			error: function(jqXHR, textStatus, errorThrown) 
			{
				responseObject.cmd = "error";
				responseObject.errorText = "An error has occurred.";
				thisMovie("mpandanda").cinemaUIResponse(responseObject);
				return;
			}
		});
	}
}

function processCinemaResponse(obj)
{
	var responseObject = {};
	if(obj.type == "error")
	{
		cinemaQueue = obj.queue;
		responseObject.cmd = String(obj.type);
		responseObject.errorText = String(obj.msg);
		thisMovie("mpandanda").cinemaUIResponse(responseObject);
	}
	else if(obj.type == "queueResponse")
	{
		var originalQueue = cinemaQueue;
		cinemaQueue = obj.queue;
		var loadCinemaObject = {};
		loadCinemaObject.queue = obj.queue;
		loadCinemaObject.video = String(obj.queue[0].videoId);
		if(cinemaQueue[0].videoStarted != obj.queue[0].videoStarted && cinemaQueue[0].videoStarted) nextVideoShift = true;
		responseObject.cmd = String(obj.type);
		responseObject.queue = obj.queue;
		responseObject.isMine = false;
		if(cinemaQueue[cinemaQueue.length - 1].requestedBy.toLowerCase() == username.toLowerCase()) responseObject.isMine = true;
		try
		{
			thisMovie("mpandanda").cinemaUIResponse(responseObject);
		}
		catch(e) {}
		if(originalQueue.length == 0) loadCinema(loadCinemaObject);
	}
	else if(obj.type == "seekQueue")
	{
		player.seekTo(player.getDuration(), true);
	}
	else if(obj.type == "videoReported")
	{
		responseObject.cmd = "queueResponse";
		responseObject.queue = cinemaQueue;
		responseObject.isMine = true;
		try
		{
			thisMovie("mpandanda").cinemaUIResponse(responseObject);
		} catch(e) {}
		thisMovie("mpandanda").videoReported(true);
		cinemaQueue[0].isReported = true;
		player.mute();
	}
}

function calculateDurationDifference()
{
	return Math.floor(player.getDuration() - player.getCurrentTime());
}