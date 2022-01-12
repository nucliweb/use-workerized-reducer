// @ts-ignore
import { useState, useEffect } from "react";
import { useWorkerizedReducer as genericUseWorkerizedReducer } from "./use-workerized-reducer.js";

export { initWorkerizedReducer } from "./use-workerized-reducer.js";

export function useWorkerizedReducer<State, Action>(
  worker: Worker,
  reducerName: string,
  initialState: State
) {
  return genericUseWorkerizedReducer<State, Action>(
    worker,
    reducerName,
    initialState,
    useState,
    useEffect
  );
}
