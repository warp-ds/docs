<script setup>
import { ref, computed } from "vue";
import "@warp-ds/components/icon";
const searchTerm = ref("");
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
const filteredIcons = computed(() =>
  iconNames.filter(name =>
    name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);
</script>

<template>
  <div class="component space-y-16" style="background-color: var(--vp-sidebar-bg-color);">
    <div class="m-8">
  <input
    v-model="searchTerm"
    type="text"
    placeholder="Search icons..."
    class="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
  />
</div>
    <div class="grid gap-24 grid-cols-4 md:grid-cols-4 m-8">
      <div v-for="icon in filteredIcons" :key="icon" class="flex flex-col items-center text-center">
        <div style="display:flex;background-color: #fff;border-radius: 4px;width:100%;height: 56px;padding: 8px 16px;gap: 10px;align-self: stretch;justify-content: center;
align-items: center;">
          <w-icon :name="icon" size="medium" locale="en"  />
        </div>
        <span class="text-s mt-8" style="color:var(--vp-c-text-1);">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>


