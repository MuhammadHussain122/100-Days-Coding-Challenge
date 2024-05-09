enum StatusCodes {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}
function ManageResponse(status: StatusCodes) {
  if (status === StatusCodes.Ok) {
    console.log("Request Succeeded ");
  } else if (status === StatusCodes.BadRequest) {
    console.log("Bad Request!");
  } else if (status === StatusCodes.NotFound) {
    console.log("Not Found!");
  } else {
    console.log(`Recevied status code: ${status}`);
  }
}
ManageResponse(200);


