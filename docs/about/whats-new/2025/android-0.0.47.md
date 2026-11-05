---
title: 'WARP Android release v.0.0.47'
date: 2025-10-06
---

Taxonomy icons & WarpPageIndicator 
---

# Warp Android release 0.0.47

## 2025-10-06


#### WarpPageIndicator
- Brand new page indicator component. 
```kotlin
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceEvenly
    ) {
        val pagerState = rememberPagerState(pageCount = {5})
        HorizontalPager(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.height(400.dp).fillMaxWidth(),
            state = pagerState,
        ) { page ->
            WarpText(
                modifier = Modifier.padding(dimensions.space2),
                text = "Your pager content here! Page: ${page + 1}",
            )
        }
        WarpPageIndicator(
            pageCount = pagerState.pageCount,
            currentPage = pagerState.currentPage
        )
    }
```

#### Taxonomy icon changes 
All taxonomy icons have now the same default size as regular icons - 24.dp x 24.dp

Replaced icons:
- **PlaneTakeOff** (uses existing icon — replacing taxonomy icon "Airplane")
- **AirplaneBed** (new icon — replacing "AirplaneHotel")
- **CabinHut** (uses existing icon — replacing "Cabin")
- **CarPart** (new icon — replacing "CarPart")
- **CarRent** (new icon — replacing "CarRent")
- **Chair** (new icon — replacing "Chair")
- **Guitar** (new icon — replacing "GuitarBat")
- **Building** (uses existing icon — replacing "Hotel")
- **IceSkater** (new icon — replacing "IceSkater")
- **Briefcase** (new icon — replacing "Job")
- **CarRight** (uses existing icon — replacing "Minivan")
- **Motorcycle** (new icon — replacing "Motorcycle")
- **AnimalPaw** (uses existing icon — replacing "Paw")
- **PhoneCheck** (new icon — replacing "PhoneBadgeCheck")
- **HouseModern** (uses existing icon — replacing "RealEstate")
- **Boat** (uses existing icon — replacing "Sailboat")
- **Shirt** (new icon — replacing "Shirt")
- **Phone** (uses existing icon — replacing "Smartphone")
- **Sofa** (new icon — replacing "Sofa")
- **StoreFront** (new icon — replacing "StoreFront")
- **Stroller** (new icon — replacing "Stroller")
- **Drill** (new icon — replacing "Tools")
- **Tractor** (uses existing icon — replacing "Tractor")
- **Vase** (new icon — replacing "Vase")

Removed identical icons:
- **NorwegianMotor** (same as StarCheck)
- **Sailing** (same as Boat)
- **Plots** (same as BuildingPlot)
- **CottagePlot** (same as BuildingPlot)
- **Measure** (same as Ruler)
- **BoatLength** (same as Ruler)
- **Feedback** (same as Messages)
- **Message** (same as Messages)
- **ChatRequest** (same as Messages)
- **NewAd** (same as CirclePlus)
- **Krone** (same as Money)
- **UserWoman** (same as User)
- **CarKey** (same as Key)
- **HouseCabin** (same as House)
- **SearchFavorites** (same as Search)
- **CarService** (same as Service/Wrench)
- **CarEngine** (same as Engine)

Renamed icons:
- **Tractor** (before ArgiculturalMachine)
- **Wrench** (before Service)
- **GearManual** (before Manual)
- **GearAutomatic** (before Automatic)
- **WashingMachine** (before Laundry)
- **Rocket** (before ProductBlink)
- **X** (before Twitter)
- **LotusFlower** (before Spa)
- **Tree** (before Woods)
- **Ticket** (before PlaneTicket)
- **Megaphone** (before ProductNoAds)
- **Paperclip** (before Attachment)
- **Dumbbell** (before Fitness)
- **Key** (before Keys)

Updated visuals for existing icons:
- **AnimalPaw**
- **Lamp**
- **Propeller**
- **Tractor**
- **Boat**
- **Phone**
- **PhoneScratched**
- **PhoneUser**
- **FrontWheelDrive**
- **AllWheelDrive**
- **BackWheelDrive**
- **UserGroup**
- **SmileyGood**
- **SmileyHappy**
- **PlaneTakeOff**
- **PlaneLand**
- **Diner**
- **AirCon**
- **HotelBed**


#### New border-strong token
Introducing new, darker border color (Gray 500)
The affected components are:
- **WarpCheckbox**
- **WarpRadio**
- **WarpTextField**