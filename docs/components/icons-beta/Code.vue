<script setup>
import { ref } from "vue";
import "@warp-ds/components/icon";
const iconNames = [
  "ActiveAds",
  "Ads",
  "AgricultureMachine",
  "AirCon",
  "AllWheelDrive",
  "AnimalPaw",
  "Archway",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "Attachment",
  "Automatic",
  "AwardMedal",
  "BackWheelDrive",
  "Bag",
  "Bank",
  "BankIdNo",
  "BatteryEmpty",
  "BatteryFull",
  "BatteryHalfFull",
  "Beach",
  "Bell",
  "BellFilled",
  "Bin",
  "Block",
  "Boat",
  "BoatLength",
  "Bolt",
  "Bookmark",
  "Browser",
  "BrowserVerified",
  "Building",
  "BuildingPlot",
  "Bulb",
  "Burger",
  "Bus",
  "CabinHut",
  "Calculator",
  "Calendar",
  "Camera",
  "Cancel",
  "Car",
  "CarEngine",
  "CarKey",
  "CarLeft",
  "CarRight",
  "CarService",
  "Charger",
  "Charter",
  "ChatRequest",
  "ChatSupport",
  "Check",
  "CheckShield",
  "Checklist",
  "ChevronDoubleLeft",
  "ChevronDoubleRight",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "CirclePlus",
  "CirclePlusFilled",
  "CircleUser",
  "CircleUserFilled",
  "Clock",
  "Close",
  "Cog",
  "ColorPalette",
  "Copy",
  "CottagePlot",
  "CreditCard",
  "Cursor",
  "Delivery",
  "Diner",
  "Discount",
  "Dislike",
  "Door",
  "Dots",
  "DotsVertical",
  "DoubleBed",
  "Download",
  "DragDots",
  "Drawer",
  "Drink",
  "Edit",
  "Energy",
  "Engine",
  "EngineBelt",
  "Error",
  "Exchange",
  "Expand",
  "EyeOff",
  "EyeOn",
  "Facebook",
  "Farm",
  "Feedback",
  "FileAdd",
  "Filter",
  "Fireplace",
  "Fishing",
  "Fitness",
  "FrontWheelDrive",
  "GasDiesel",
  "GasFuel",
  "GasHybrid",
  "GraphLine",
  "GraphPie",
  "Grid",
  "Grill",
  "Headset",
  "Heart",
  "HeartRate",
  "Hiking",
  "History",
  "House",
  "HouseBed",
  "HouseCabin",
  "HouseFilled",
  "HouseModern",
  "HousePerson",
  "Image",
  "Info",
  "Instagram",
  "JetSki",
  "Keys",
  "Krone",
  "Lamp",
  "Laundry",
  "Layers",
  "Leaf",
  "Lift",
  "Like",
  "Link",
  "LinkExternal",
  "ListSort",
  "LockShield",
  "Logout",
  "Mail",
  "Mailbox",
  "Manual",
  "Map",
  "Measure",
  "Message",
  "Messages",
  "MessagesFilled",
  "Minus",
  "Mixer",
  "Money",
  "Mountain",
  "NewAd",
  "NoSmoking",
  "NorwegianMotor",
  "OfficeDesk",
  "Organize",
  "Parking",
  "Phone",
  "PhoneScratched",
  "PhoneUsed",
  "PictureStack",
  "PinMarker",
  "PinRound",
  "PlaneLand",
  "PlaneTakeOff",
  "PlaneTicket",
  "Play",
  "Playhouse",
  "Plots",
  "Plus",
  "ProductBlink",
  "ProductBump",
  "ProductCarousel",
  "ProductHighlightListing",
  "ProductNabolagsprofil",
  "ProductNoAds",
  "ProductStarred",
  "ProductTop",
  "Propeller",
  "Question",
  "Refresh",
  "Road",
  "RoomService",
  "RowingBoat",
  "Ruler",
  "Sailing",
  "Sauna",
  "ScrollUp",
  "Search",
  "SearchFavorites",
  "Seat",
  "Send",
  "Service",
  "Share",
  "Shipping",
  "Shoes",
  "ShoppingCart",
  "Shower",
  "SingleCylinder",
  "Skyscraper",
  "SmileyGood",
  "SmileyHappy",
  "SmileyNeutral",
  "SmileySad",
  "Sorting",
  "Spa",
  "Sparkles",
  "Speedometer",
  "Stairs",
  "StarCheck",
  "StarEmpty",
  "StarFull",
  "StarHalf",
  "Store",
  "Stove",
  "Success",
  "Suitcase",
  "Support",
  "Swimming",
  "TV",
  "Tag",
  "TaskList",
  "TextBold",
  "TextItalic",
  "TextStrikethrough",
  "TextUnderline",
  "Theater",
  "ThreeSixty",
  "TownHouse",
  "TrendDown",
  "TrendFlat",
  "TrendUp",
  "Twitter",
  "Up",
  "Upload",
  "User",
  "UserGroup",
  "UserWoman",
  "Users",
  "Vacuum",
  "Verification",
  "Wallet",
  "Warning",
  "Warranty",
  "WaterPitcher",
  "Weight",
  "Wheelchair",
  "Wifi",
  "Woods",
  "YouTube",
];
const sizes = ["small", "medium", "large"];
const selectedIcon = ref(iconNames[0]);
const selectedSize = ref(sizes[1]);
</script>

<template>
  <div class="component space-y-16">
    <div class="space-y-4">
      <w-icon :name="selectedIcon" :size="selectedSize" locale="en" />
    </div>
    <div class="flex gap-4 items-center">
      <label>
        Icon Name:
        <select v-model="selectedIcon" class="border rounded px-2 py-1">
          <option v-for="name in iconNames" :key="name" :value="name">{{ name }}</option>
        </select>
      </label>
      <label>
        Size:
        <select v-model="selectedSize" class="border rounded px-2 py-1">
          <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
        </select>
      </label>
    </div>
  </div>
</template>
