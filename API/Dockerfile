FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app
EXPOSE 8080

# copy csproj and restore as distinct layers
COPY "Projects.sln" "Projects.sln"
COPY ./API/API.csproj ./API/API.csproj

# Restore package deps
RUN dotnet restore "Projects.sln"

# Copy the app folders over
COPY . .
WORKDIR /app
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "API.dll"]