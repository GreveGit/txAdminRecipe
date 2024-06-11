--[[
    ITEMS DATABASE ---- Following things should help you create new items

    isUsable = Used to indicate on UI is item is usable
    isRemoved = (CLIENT INTERP ONLY, HAS TO ACTUALLY BE REMOVED IN USE CODE) used to determine if an item should be removed from inventory when used
    isStackable = false if not stackable, otherwise the amount per stack
    isDestroyed = if item is entirely removed from inventory when fully degen
    durability = time (in seconds) for how long the item takes to fully degen, if not set or set to 0 item does not degen
    state = if set, will be setup to be a usable item and will add this state to character on use. And when player loses item, will remove it (if no other item that gives this state is set)

    type: [
        1 = consumable,
        2 = weapon,
        3 = tool,
        4 = crafting ingredient,
        5 = collectable,
        6 = junk,
        7 = unknown,
        8 = evidence,
        9 = ammo
        10 = container
        11 = gem
        12 = paraphernalia
        13 = wearable
		14 = contraband
		15 = gang chain
		16 = weapon attachment
		17 = schematic
    ]

    rarity = [
        0 = nothing
        1 = common,
        2 = uncommon,
        3 = rare,
        4 = epic,
        5 = labor objective (Yellow)
    ]
]]

_itemsSource["misc"] = {
	{
		name = "govid",
		label = "Government ID",
		price = 0,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 5,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0,
	},
	{
		name = "government_badge",
		label = "Badge",
		description = "Government Issued Badge",
		price = 0,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 5,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0,
	},
	{
		name = "vaultcard",
		label = "Vault Access Card",
		price = 0,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		isDestroyed = true,
		type = 7,
		rarity = 4,
		closeUi = true,
		metalic = false,
		weight = 1,
		durability = (60 * 60 * 24 * 7),
	},
	{
		name = "rental_papers",
		label = "Rental Papers",
		description = "Documents that prove who rented a vehicle.",
		price = 0,
		isUsable = false,
		isRemoved = false,
		isStackable = false,
		isDestroyed = true,
		type = 6,
		rarity = 1,
		closeUi = false,
		metalic = false,
		weight = 1,
		durability = (60 * 60 * 24 * 1), -- 1 day
	},
	{
		name = "radio",
		label = "Encrypted Radio",
		description = "Encrypted Communication Device for Emergency Services",
		price = 725,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		isDestroyed = true,
		type = 3,
		rarity = 2,
		closeUi = true,
		metalic = false,
		state = "RADIO_ENCRYPTED",
		weight = 1,
		durability = (60 * 60 * 24 * 60),
	},
	{
		name = "radio_shitty",
		label = "P6900 Radio",
		description = "High Frequency Used for Short Range Communication",
		price = 2500,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		isDestroyed = false,
		type = 3,
		rarity = 1,
		closeUi = true,
		metalic = false,
		state = "RADIO_CIV",
		weight = 1,
		durability = (60 * 60 * 24 * 21),
	},
	{
		name = "phone",
		label = "Phone",
		price = 100,
		isUsable = false,
		isRemoved = true,
		isStackable = false,
		isDestroyed = false,
		type = 7,
		rarity = 1,
		closeUi = false,
		metalic = false,
		state = "PHONE",
		weight = 1,
		durability = (60 * 60 * 24 * 21),
	},
	{
		name = "megaphone",
		label = "Megaphone",
		description = "Yell insults at people but from a longer distance",
		price = 1500,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		isDestroyed = true,
		type = 3,
		rarity = 2,
		closeUi = true,
		metalic = true,
		state = "MEGAPHONE",
		weight = 2,
		durability = (60 * 60 * 24 * 14),
		--durability = 0,
	},
	{
		name = "fakeplates",
		label = "License Plates",
		description = "A set of license plates from a vehicle",
		price = 5000,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		isDestroyed = false,
		type = 3,
		rarity = 3,
		closeUi = true,
		metalic = true,
		weight = 2,
	},
	{
		name = "personal_plates",
		label = "Personal Plate",
		description = "Set a personal plate for a vehicle.",
		price = 5000,
		isUsable = true,
		isRemoved = true,
		isStackable = 10,
		isDestroyed = false,
		type = 3,
		rarity = 3,
		closeUi = true,
		metalic = true,
		weight = 0.5,
	},
	{
		name = "fertilizer_nitrogen",
		label = "Fertilizer (Nitrogen)",
		description = "Nitrogen rich fertilizer improves viability of output when the plant is harvested.",
		price = 600,
		isUsable = false,
		isRemoved = false,
		isStackable = 50,
		isDestroyed = true,
		type = 1,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 3,
	},
	{
		name = "fertilizer_phosphorus",
		label = "Fertilizer (Phosphorus)",
		description = "Phosphorus rich fertilizer helps increase plant growth speed.",
		price = 600,
		isUsable = false,
		isRemoved = false,
		isStackable = 50,
		isDestroyed = true,
		type = 1,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 3,
	},
	{
		name = "fertilizer_potassium",
		label = "Fertilizer (Potassium)",
		description = "Potassium rich fertilizer helps keep plants hydrated.",
		price = 600,
		isUsable = false,
		isRemoved = false,
		isStackable = 50,
		isDestroyed = true,
		type = 1,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 3,
	},
	{
		name = "mask",
		label = "Mask",
		price = 50,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		type = 13,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0,
	},
	{
		name = "hat",
		label = "Hat",
		price = 50,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		type = 13,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0,
	},
	{
		name = "accessory",
		label = "Accessory",
		price = 50,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		type = 13,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0,
	},
	{
		name = "sombrero",
		label = "Sombrero",
		price = 50,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		type = 13,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0,
		staticMetadata = {
			hat = {
				componentId = 0,
				drawableId = 166,
				textureId = 0,
				disabled = false,
			},
		}
	},
	{
		name = "camping_chair",
		label = "Foldable Chair",
		price = 400,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 13,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 2.0,
		isDestroyed = true,
		--durability = (60 * 60 * 24 * 90),
	},
	{
		name = "beanbag",
		label = "A Beanbag",
		description = "So Comfortable",
		price = 700,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 13,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 2.0,
		isDestroyed = true,
		--durability = (60 * 60 * 24 * 90),
	},
	{
		name = "cigarette",
		label = "Cigarette",
		price = 3,
		isUsable = true,
		isRemoved = false,
		isStackable = 30,
		type = 1,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 0.1,
		isDestroyed = true,
		animConfig = {
			time = 15000,
			pbConfig = {
				label = "Smoking",
				useWhileDead = false,
				canCancel = false,
				vehicle = false,
				disarm = false,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = false,
				animation = {
					task = "WORLD_HUMAN_SMOKING",
				},
			},
		},
	},
	{
		name = "cigarette_pack",
		label = "Pack of Cigarettes",
		price = 20,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 1,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 5.0,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 14),
		animConfig = {
			time = 2000,
			pbConfig = {
				label = "Unpacking",
				useWhileDead = false,
				canCancel = false,
				vehicle = false,
				disarm = false,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = false,
			},
		},
	},
	{
		name = "armor",
		label = "Body Armor",
		price = 750,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 1,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 8,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
		animConfig = {
			anim = "adjust",
			time = 5000,
			pbConfig = {
				label = "Equipping",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
	},
	{
		name = "heavyarmor",
		label = "Heavy Body Armor",
		price = 1500,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 1,
		rarity = 2,
		closeUi = true,
		metalic = true,
		weight = 8,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
		animConfig = {
			anim = "adjust",
			time = 10000,
			pbConfig = {
				label = "Equipping",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
	},
	{
		name = "pdarmor",
		label = "PD Body Armor",
		price = 25,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 1,
		rarity = 3,
		closeUi = true,
		metalic = true,
		weight = 8,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
		animConfig = {
			anim = "adjust",
			time = 7500,
			pbConfig = {
				label = "Equipping",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
	},
	{
		name = "bowling_ball",
		label = "Bowling Ball",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		type = 7,
		rarity = 4,
		closeUi = true,
		metalic = true,
		weight = 50.0,
		state = "ANIM_bowling_ball",
	},
	{
		name = "petrock",
		label = "Pet Rock",
		description = "Please take care of me",
		price = 10,
		isUsable = false,
		isRemoved = false,
		isStackable = false,
		isDestroyed = false,
		type = 5,
		rarity = 4,
		closeUi = false,
		metalic = false,
		weight = 1,
	},
	{
		name = "vanityitem",
		label = "Vanity Item",
		price = 0,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		isDestroyed = false,
		type = 5,
		rarity = 3,
		closeUi = false,
		metalic = false,
		weight = 0.01,
	},
	{
		name = "parts_box",
		label = "Parts Box",
		price = 250,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		closeUi = true,
		type = 1,
		rarity = 3,
		metalic = false,
		weight = 10,
		durability = (60 * 60 * 24 * 7),
		state = "ANIM_box",
	},
	{
		name = "choplist",
		label = "LSUNDG Shopping List",
		description = "Personal list just for you, how special",
		price = 0,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		isDestroyed = true,
		type = 14,
		rarity = 4,
		closeUi = true,
		metalic = false,
		weight = 0.1,
		durability = (60 * 60 * 24 * 14),
	},
	{
		name = "lsundg_invite",
		label = "LSUNDG Invitation",
		description = "Gain access to an exclusive club, wow aren't you special",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		isDestroyed = true,
		type = 7,
		rarity = 4,
		closeUi = true,
		metalic = false,
		weight = 0.1,
	},
	{
		name = "birthday_cake",
		label = "Birthday Cake",
		description = "Happy Birthday",
		price = 240,
		isUsable = true,
		isRemoved = true,
		isStackable = 1,
		type = 5,
		rarity = 4,
		closeUi = true,
		weight = 2.0,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
			Ignore = {
				PLAYER_STRESS = 20,
			},
		},
		stressTicks = { "3", "3", "3", "3", "3", "3", "3", "3" },
		animConfig = {
			anim = "eat",
			time = 10000,
			pbConfig = {
				label = "Eating Cake",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
	},
	{
		name = "scuba_gear",
		label = "Scuba Gear",
		qualification = "EMS_DIVING",
		price = 1000,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 3,
		rarity = 2,
		closeUi = true,
		metalic = true,
		weight = 10,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 14),
	},
	{
		name = "cloth",
		label = "Cloth",
		price = 4,
		isUsable = false,
		isRemoved = false,
		isStackable = 1000,
		type = 6,
		rarity = 1,
		closeUi = false,
		metalic = false,
		weight = 0,
		isDestroyed = false,
	},
	{
		name = "pipe",
		label = "Pipe",
		price = 12,
		isUsable = false,
		isRemoved = false,
		isStackable = 100,
		type = 6,
		rarity = 1,
		closeUi = false,
		metalic = false,
		weight = 0,
		isDestroyed = false,
	},
	{
		name = "nails",
		label = "Nails",
		price = 2,
		isUsable = false,
		isRemoved = false,
		isStackable = 1000,
		type = 6,
		rarity = 1,
		closeUi = false,
		metalic = false,
		weight = 0,
		isDestroyed = false,
	},
	{
		name = "blindfold",
		label = "Blindfold",
		price = 2,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 13,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 1,
		isDestroyed = false,
	},
	{
		name = "diamond_vip",
		label = "Diamond VIP",
		price = 0,
		isUsable = false,
		isRemoved = false,
		isStackable = false,
		type = 5,
		rarity = 3,
		closeUi = true,
		metalic = false,
		weight = 0,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
	},
}
