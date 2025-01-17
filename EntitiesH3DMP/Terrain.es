108
%{
#include "EntitiesH3DMP/StdH/StdH.h"
#include <Engine/Terrain/Terrain.h>
%}

class CTerrainEntity : CEntity {
name      "Terrain";
thumbnail "Thumbnails\\Terrain.tbn";

properties:
components:
functions:
procedures:
  Main()
  {
    // Init entity as terrain
    InitAsTerrain(); 
    TerrainChangeNotify();
    SetCollisionFlags(ECF_BRUSH);
    return;
  }
};


