import { TIMEOUT } from "node:dns";
import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

// Test Data is reaped after interval passes
test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Cache Reaping $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval * 2));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});

// Test Data is Caching properly
test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval - 100));
  const stillCached = cache.get(key);
  expect(stillCached).toBe(cached);

  cache.stopReapLoop();
});

// Test for overwritting keys
test.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 1000
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000
  },
])("Test Overwriting Key", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, "first");
  const cached = cache.get(key);
  
  //allow time to pass to check if lifetime is reset on overwrite
  await new Promise((resolve) => setTimeout(resolve, interval / 2))

  cache.add(key, val)
  expect(cached).toBe("first");

  await new Promise((resolve) => setTimeout(resolve, interval / 2));
  const overwritten = cache.get(key);
  expect(overwritten).toBe(val);


  cache.stopReapLoop();
});