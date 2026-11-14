body {
    background-color: #0d1117;
    color: #c9d1d9;
    font-family: sans-serif;
    text-align: center;
    margin: 0;
    padding: 5px;
}

#game-container {
    max-width: 400px;
    margin: 0 auto;
}

h1 {
    font-size: 20px;
    color: #58a6ff;
    margin-bottom: 10px;
}

#ui-panel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    margin-bottom: 10px;
}

.stat-box {
    background: #161b22;
    padding: 8px;
    border-radius: 6px;
    font-size: 13px;
    border: 1px solid #30363d;
}

#control-panel {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
}

button {
    background-color: #238636;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}

button:active {
    background-color: #2ea043;
}

canvas {
    background-color: #111;
    border: 2px solid #30363d;
    border-radius: 8px;
    width: 100%;
    max-width: 360px;
}

#log-box {
    background: #161b22;
    padding: 8px;
    border-radius: 6px;
    margin-top: 10px;
    font-size: 12px;
    text-align: left;
    border: 1px solid #30363d;
}