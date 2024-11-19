import {GnbGauge} from "./gnb_gauge";
import {GnbGcdAbility, GnbOgcdAbility, ReadyToBlastBuff, ReadyToRipBuff, NoMercyBuff, ReadyToTearBuff, ReadyToGougeBuff, ReadyToBreakBuff, ReadyToReignBuff} from "./gnb_types";

export const LightningShot: GnbGcdAbility = {
    type: 'gcd',
    name: "Lightning Shot",
    id: 16143,
    potency: 150,
    attackType: "Weaponskill",
    gcd: 2.5,
    cast: 0,
    appDelay: 0.72,
};

export const KeenEdge: GnbGcdAbility = {
    type: 'gcd',
    name: "Keen Edge",
    id: 16137,
    potency: 300,
    attackType: "Weaponskill",
    gcd: 2.5,
    cast: 0,
};

export const BrutalShell: GnbGcdAbility = {
    type: 'gcd',
    name: "Brutal Shell",
    id: 16139,
    potency: 380,
    attackType: "Weaponskill",
    gcd: 2.5,
    cast: 0,
};

export const SolidBarrel: GnbGcdAbility = {
    type: 'gcd',
    name: "Solid Barrel",
    id: 16145,
    potency: 460,
    attackType: "Weaponskill",
    gcd: 2.5,
    cast: 0,
    updateCartridges: (gauge: GnbGauge) => gauge.cartridges += 1,
};

export const GnashingFang: GnbGcdAbility = {
    type: 'gcd',
    name: "Gnashing Fang",
    id: 16146,
    potency: 500,
    attackType: "Weaponskill",
    gcd: 2.5,
    cast: 0,
    cartridgeCost: 1,
    activatesBuffs: [ReadyToRipBuff],
    cooldown: {
        time: 30,
        reducedBy: "skillspeed",
        charges: 1,
    },
    updateCartridges: (gauge: GnbGauge) => gauge.cartridges -= 1,
};

export const SavageClaw: GnbGcdAbility = {
    type: 'gcd',
    name: "Savage Claw",
    id: 16147,
    potency: 560,
    attackType: "Weaponskill",
    gcd: 2.5,
    cast: 0,
    activatesBuffs: [ReadyToTearBuff],
};

export const WickedTalon: GnbGcdAbility = {
    type: 'gcd',
    name: "Wicked Talon",
    id: 16150,
    potency: 620,
    attackType: "Weaponskill",
    gcd: 2.5,
    cast: 0,
    activatesBuffs: [ReadyToGougeBuff],
};

export const BurstStrike: GnbGcdAbility = {
    type: 'gcd',
    name: "Burst Strike",
    id: 16162,
    potency: 460,
    attackType: "Weaponskill",
    gcd: 2.5,
    cartridgeCost: 1,
    activatesBuffs: [ReadyToBlastBuff],
    updateCartridges: (gauge: GnbGauge) => gauge.cartridges -= 1,
};

export const DoubleDown: GnbGcdAbility = {
    type: 'gcd',
    name: "Double Down",
    id: 25760,
    potency: 1200,
    attackType: "Weaponskill",
    gcd: 2.5,
    cartridgeCost: 1,
    cooldown: {
        time: 60,
        reducedBy: "skillspeed",
        charges: 1,
    },
    updateCartridges: (gauge: GnbGauge) => gauge.cartridges -= 1,
};

export const SonicBreak: GnbGcdAbility = {
    type: 'gcd',
    name: "Sonic Break",
    id: 16153,
    potency: 300,
    attackType: "Weaponskill",
    gcd: 2.5,
    dot: {
        id: 1837,
        tickPotency: 60,
        duration: 30,
    },
};

export const ReignOfBeasts: GnbGcdAbility = {
    type: 'gcd',
    name: "Reign of Beasts",
    id: 36937,
    potency: 800,
    attackType: "Weaponskill",
    gcd: 2.5,
};

export const NobleBlood: GnbGcdAbility = {
    type: 'gcd',
    name: "Noble Blood",
    id: 36938,
    potency: 1000,
    attackType: "Weaponskill",
    gcd: 2.5,
};

export const LionHeart: GnbGcdAbility = {
    type: 'gcd',
    name: "Lion Heart",
    id: 36939,
    potency: 1200,
    attackType: "Weaponskill",
    gcd: 2.5,
};

export const NoMercy: GnbOgcdAbility = {
    type: 'ogcd',
    name: "No Mercy",
    id: 16138,
    potency: null,
    attackType: "Ability",
    cooldown: {
        time: 60,
        charges: 1,
    },
    activatesBuffs: [NoMercyBuff, ReadyToBreakBuff],
};

export const Bloodfest: GnbOgcdAbility = {
    type: 'ogcd',
    name: "Bloodfest",
    id: 16164,
    potency: 0,
    attackType: "Ability",
    cooldown: {
        time: 120,
        charges: 1,
    },
    activatesBuffs: [ReadyToReignBuff],
    updateCartridges: (gauge: GnbGauge) => gauge.cartridges += 3,
};

export const BlastingZone: GnbOgcdAbility = {
    type: 'ogcd',
    name: "Blasting Zone",
    id: 16165,
    potency: 800,
    attackType: "Ability",
    cooldown: {
        time: 30,
        charges: 1,
    },
};

export const BowShock: GnbOgcdAbility = {
    type: 'ogcd',
    name: "Bow Shock",
    id: 16159,
    potency: 150,
    attackType: "Ability",
    cooldown: {
        time: 60,
        charges: 1,
    },
    dot: {
        id: 1838,
        tickPotency: 60,
        duration: 15,
    },
};

// Continuation abilities:
export const Hypervelocity: GnbOgcdAbility = {
    type: 'ogcd',
    name: "Hypervelocity",
    id: 25759,
    potency: 200,
    attackType: "Ability",
    cooldown: {
        time: 1,
        charges: 1,
    },
};

export const JugularRip: GnbOgcdAbility = {
    type: 'ogcd',
    name: "Jugular Rip",
    id: 16156,
    potency: 240,
    attackType: "Ability",
    cooldown: {
        time: 1,
        charges: 1,
    },
};

export const AbdomenTear: GnbOgcdAbility = {
    type: 'ogcd',
    name: "Abdomen Tear",
    id: 16157,
    potency: 280,
    attackType: "Ability",
    cooldown: {
        time: 1,
        charges: 1,
    },
};

export const EyeGouge: GnbOgcdAbility = {
    type: 'ogcd',
    name: "Eye Gouge",
    id: 16158,
    potency: 320,
    attackType: "Ability",
    cooldown: {
        time: 1,
        charges: 1,
    },
};

