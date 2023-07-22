FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app
EXPOSE 8080

# copy csproj and restore as distinct layers
COPY API/API.csproj API/API.csproj

# Restore package deps
RUN dotnet restore API/API.csproj

# Copy the app folders over
COPY API API
WORKDIR /app/API
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build-env /app/API/out .
ENTRYPOINT ["dotnet", "API.dll"]