var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Ok"] = 200] = "Ok";
    StatusCodes[StatusCodes["Created"] = 201] = "Created";
    StatusCodes[StatusCodes["NoContent"] = 204] = "NoContent";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
})(StatusCodes || (StatusCodes = {}));
function ManageResponse(status) {
    if (status === StatusCodes.Ok) {
        console.log("Request Succeeded ");
    }
    else if (status === StatusCodes.BadRequest) {
        console.log("Bad Request!");
    }
    else if (status === StatusCodes.NotFound) {
        console.log("Not Found!");
    }
    else {
        console.log(`Recevied status code: ${status}`);
    }
}
ManageResponse(200);
export {};
