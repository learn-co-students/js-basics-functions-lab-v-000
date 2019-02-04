function distanceFromHqInBlocks(location) {
  const hqLocation = 42;
  if (location > hqLocation) {
    return (location - hqLocation);
  } else {
    return (hqLocation - location);
  }
}
