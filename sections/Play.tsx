"use client";

import {
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";

import Link from "next/link";
import Image from "next/image";

import {
  Chess,
  Square,
  PieceSymbol,
  Color,
} from "chess.js";

import RedoxChessEngine from "@/utils/redoxChessEngine";

import "./Play.css";

// ================= PIECES =================

const PIECES: Record<string, string> = {
  // White pieces (light cream color)
  wK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#fff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  wQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L14 11v14L7 14l2 12z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
  wR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v12.5H14V17"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path fill="none" stroke-linejoin="miter" d="M11 14h23"/></g></svg>`,
  wB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  wN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#fff" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#fff" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#000" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  wP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,
  // Black pieces (dark purple color matching theme)
  bK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6" stroke="#c2a4ff"/><path fill="#1a1a2e" stroke="#c2a4ff" d="M20 8h5"/><path fill="#1a1a2e" stroke="#c2a4ff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#1a1a2e" stroke="#c2a4ff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path stroke="#c2a4ff" d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  bQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#1a1a2e"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path fill="#1a1a2e" stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/><path fill="#1a1a2e" stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" stroke-linecap="butt" d="M11 38.5a35 35 1 0 0 23 0"/><path fill="none" d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0"/></g></svg>`,
  bR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#1a1a2e" stroke-linecap="butt" d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z"/><path fill="#1a1a2e" stroke-linecap="butt" stroke-linejoin="miter" d="M14 29.5v-13h17v13H14z"/><path fill="#1a1a2e" stroke-linecap="butt" d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"/><path fill="none" stroke-linejoin="miter" d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"/></g></svg>`,
  bB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#1a1a2e" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  bN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#1a1a2e" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#1a1a2e" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#c2a4ff" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  bP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#1a1a2e" stroke="#c2a4ff" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,
};

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const Play = () => {

  const [game, setGame] = useState(new Chess());

  const [selectedSquare, setSelectedSquare] =
    useState<Square | null>(null);

  const [possibleMoves, setPossibleMoves] =
    useState<Square[]>([]);

  const [moveHistory, setMoveHistory] = useState<string[]>([]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hey 👋 I’m Aryan. Ask me anything about coding, chess or projects.",
    },
  ]);

  const [chatInput, setChatInput] = useState("");

  const [thinking, setThinking] = useState(false);

  const engineRef = useRef<RedoxChessEngine | null>(null);

  const files = ["a","b","c","d","e","f","g","h"];
  const ranks = ["8","7","6","5","4","3","2","1"];

  // ================= ENGINE =================

  useEffect(() => {

    const init = async () => {

      engineRef.current = new RedoxChessEngine();

      await engineRef.current.init();

    };

    init();

    return () => {
      engineRef.current?.quit();
    };

  }, []);

  // ================= AI MOVE =================

  useEffect(() => {

    if (
      game.turn() === "b" &&
      !game.isGameOver() &&
      engineRef.current
    ) {

      setThinking(true);

      engineRef.current.setPosition(game.fen());

      engineRef.current.getBestMove((move: string) => {

        const from = move.slice(0, 2) as Square;
        const to = move.slice(2, 4) as Square;

        movePiece(from, to);

        setThinking(false);

      }, 12);
    }

  }, [game]);

  // ================= MOVE =================

  const movePiece = (
    from: Square,
    to: Square
  ) => {

    try {

      const copy = new Chess(game.fen());

      const move = copy.move({
        from,
        to,
        promotion: "q",
      });

      if (!move) return;

      setMoveHistory((prev) => [...prev, move.san]);

      setGame(copy);

      setSelectedSquare(null);

      setPossibleMoves([]);

    } catch {
      setSelectedSquare(null);
      setPossibleMoves([]);
    }
  };

  // ================= CLICK =================

  const handleSquareClick = (
    square: Square
  ) => {

    if (thinking) return;

    const piece = game.get(square);

    if (selectedSquare) {

      if (possibleMoves.includes(square)) {

        movePiece(selectedSquare, square);

        return;
      }

      setSelectedSquare(null);
      setPossibleMoves([]);

      return;
    }

    if (piece && piece.color === "w") {

      setSelectedSquare(square);

      const moves = game.moves({
        square,
        verbose: true,
      });

      setPossibleMoves(
        moves.map((m) => m.to as Square)
      );
    }
  };

  // ================= CHAT =================

  const sendMessage = async () => {

    if (!chatInput.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: chatInput,
    };

    setChatMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setChatInput("");

    try {

      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: chatInput,
            },
          ],
        }),
      });

      const data = await response.json();

      const text =
        data?.choices?.[0]?.message?.content ||
        "Connection issue 😅";

      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: text,
        },
      ]);

    } catch {

      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection issue 😅",
        },
      ]);
    }
  };

  // ================= PIECE =================

  const renderPiece = (
    piece:
      | {
          type: PieceSymbol;
          color: Color;
        }
      | null
  ) => {

    if (!piece) return null;

    const key = `${piece.color}${piece.type.toUpperCase()}`;

    return (
      <div
        className="chess-piece"
        dangerouslySetInnerHTML={{
          __html: PIECES[key],
        }}
      />
    );
  };

  // ================= UI =================

  return (
    <div className="play-page">

      {/* HEADER */}

      <div className="play-header">

        <Link
          href="/"
          className="back-button"
        >
          ← Back to Home
        </Link>

      </div>

      <div className="chess-container">

        {/* LEFT */}

        <div className="chat-panel">

          <div className="chat-header">
            💬 Talk with me
          </div>

          <div className="chat-messages">

            {chatMessages.map((msg, i) => (

              <div
                key={i}
                className={`chat-message ${msg.role}`}
              >
                {msg.content}
              </div>

            ))}

          </div>

          <div className="chat-input-area">

            <input
              value={chatInput}
              onChange={(e) =>
                setChatInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="chat-input"
              placeholder="Type a message..."
            />

            <button
              onClick={sendMessage}
              className="chat-send-btn"
            >
              ➤
            </button>

          </div>

        </div>

        {/* BOARD */}

        <div className="chess-board-section">

          {/* TOP */}

          <div className="player-bar">

            <div className="player-info">

              <div className="player-avatar">

                <Image
                  src="/Aryan.jpg"
                  alt="Aryan"
                  width={40}
                  height={40}
                  className="player-img"
                />

              </div>

              <div className="player-details">

                <span className="player-name">
                  Aryan Singh
                </span>

                <span className="player-rating">
                  {thinking
                    ? "🤔 Thinking..."
                    : "3640 ELO • RedxChess AI"}
                </span>

              </div>

            </div>

          </div>

          {/* STATUS */}

          <div className="game-status">

            {game.turn() === "w"
              ? "White's turn"
              : "Black's turn"}

          </div>

          {/* BOARD */}

          <div className="chess-board">

            {ranks.map((rank) =>
              files.map((file) => {

                const square =
                  `${file}${rank}` as Square;

                const piece =
                  game.get(square);

                const isLight =
                  (files.indexOf(file) +
                    Number(rank)) %
                    2 ===
                  0;

                return (
                  <div
                    key={square}
                    onClick={() =>
                      handleSquareClick(square)
                    }
                    className={`chess-square ${
                      isLight
                        ? "light"
                        : "dark"
                    }`}
                  >

                    {renderPiece(piece)}

                    {possibleMoves.includes(
                      square
                    ) && (
                      <div className="move-indicator" />
                    )}

                  </div>
                );
              })
            )}

          </div>

          {/* BUTTON */}

          <button
            className="control-btn"
            onClick={() => {
              setGame(new Chess());
              setMoveHistory([]);
            }}
          >
            New Game
          </button>

        </div>

        {/* MOVES */}

        <div className="move-history">

          <div className="move-history-header">
            ♟ MOVE HISTORY
          </div>

          <div className="move-history-list">

            {moveHistory.map((move, i) => (

              <div
                key={i}
                className="move-row"
              >
                {i + 1}. {move}
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Play;