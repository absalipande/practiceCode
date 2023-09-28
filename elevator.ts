type Elevator = {
  numFloors: number;
  currentFloor: number;
  direction: number; // 1 for up, -1 for down
  requests: Set<number>;
};

const createElevator = (numFloors: number): Elevator => ({
  numFloors,
  currentFloor: 1,
  direction: 1,
  requests: new Set(),
});

const requestFloor = (elevator: Elevator, floor: number): Elevator => ({
  ...elevator,
  requests: new Set([...elevator.requests, floor]),
});

const moveElevator = (elevator: Elevator): Elevator => {
  if (elevator.requests.size === 0) {
    return elevator;
  }

  const sortedRequests = [...elevator.requests].sort((a, b) =>
    elevator.direction === 1 ? a - b : b - a
  );

  const nextStop =
    elevator.direction === 1
      ? sortedRequests.find((request) => request >= elevator.currentFloor)!
      : sortedRequests.find((request) => request <= elevator.currentFloor)!;

  const updatedRequests = new Set(
    [...elevator.requests].filter((r) => r !== nextStop)
  );

  const updatedElevator = {
    ...elevator,
    requests: updatedRequests,
    currentFloor: nextStop,
  };

  if (updatedElevator.currentFloor === 1) {
    updatedElevator.direction = 1;
  } else if (updatedElevator.currentFloor === updatedElevator.numFloors) {
    updatedElevator.direction = -1;
  }

  return updatedElevator;
};

// Example usage:
const elevator = createElevator(10);
const updatedElevator1 = requestFloor(elevator, 5);
const updatedElevator2 = requestFloor(updatedElevator1, 2);
const updatedElevator3 = requestFloor(updatedElevator2, 8);

while (updatedElevator3.requests.size > 0) {
  console.log(`Elevator is on floor ${updatedElevator3.currentFloor}`);
  const updatedElevator = moveElevator(updatedElevator3);
  updatedElevator3.requests = updatedElevator.requests;
  updatedElevator3.currentFloor = updatedElevator.currentFloor;
}

console.log('All requests completed.');
