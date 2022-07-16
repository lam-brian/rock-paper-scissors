import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface gameState {
  playerChoice: string;
  cpuChoice: string;
  gameStatus: string | null;
  score: number;
}

const initialState: gameState = {
  playerChoice: "",
  cpuChoice: "",
  gameStatus: null,
  score: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setChoice(state, action: PayloadAction<string>) {
      state.playerChoice = action.payload;

      let cpu = "";
      const cpuNum = Math.trunc(Math.random() * 3) + 1;
      if (cpuNum === 1) cpu = "rock";
      else if (cpuNum === 2) cpu = "paper";
      else if (cpuNum === 3) cpu = "scissors";

      state.cpuChoice = cpu;
    },
    setWinner(state) {
      if (state.playerChoice === "rock") {
        if (state.cpuChoice === "rock") state.gameStatus = "TIE";
        if (state.cpuChoice === "paper") state.gameStatus = "LOSE";
        if (state.cpuChoice === "scissors") {
          state.gameStatus = "WIN";
          state.score++;
        }
      }
      if (state.playerChoice === "scissors") {
        if (state.cpuChoice === "rock") state.gameStatus = "LOSE";
        if (state.cpuChoice === "paper") {
          state.gameStatus = "WIN";
          state.score++;
        }
        if (state.cpuChoice === "scissors") state.gameStatus = "TIE";
      }
      if (state.playerChoice === "paper") {
        if (state.cpuChoice === "rock") {
          state.gameStatus = "WIN";
          state.score++;
        }
        if (state.cpuChoice === "paper") state.gameStatus = "TIE";
        if (state.cpuChoice === "scissors") state.gameStatus = "LOSE";
      }
    },
    resetGame(state) {
      state.gameStatus = null;
    },
  },
});

const gameReducer = gameSlice.reducer;

export const gameActions = gameSlice.actions;

export default gameReducer;
