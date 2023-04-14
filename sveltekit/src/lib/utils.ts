import { ActionDifficulty, ActionType } from "./interfaces";
import { addAction } from "./stores";

export function declareBaseActions() {
    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Easy,
        description: "Do 20 jumping jacks",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Easy,
        description: "Do a silly dance",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Easy,
        description: "Tell a joke",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Medium,
        description: "Sing a song in a different language",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Medium,
        description: "Say the alphabet backwards",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Medium,
        description: "Do 10 push-ups",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Medium,
        description: "Talk like a pirate for the rest of the game",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Medium,
        description: "Do an impression of your favorite celebrity",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Hard,
        description: "Wear your clothes backwards for the rest of the game",
    });

    addAction({
        type: ActionType.Dare,
        difficulty: ActionDifficulty.Hard,
        description: "Take a shot of hot sauce",
    });
}