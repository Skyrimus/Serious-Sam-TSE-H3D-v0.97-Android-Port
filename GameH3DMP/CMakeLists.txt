set(
  SOURCES
  CompMessage.cpp
  CompModels.cpp
  Computer.cpp
  Console.cpp
  Controls.cpp
  Game.cpp
  LCDDrawing.cpp
  LoadingHook.cpp
  Map.cpp
  SessionProperties.cpp
  StdAfx.cpp
  WEDInterface.cpp
  Camera.cpp
)

if (STATIC_LINKING)
  add_library(GameH3DMP STATIC ${SOURCES})
else ()
  add_library(GameH3DMP SHARED ${SOURCES})
endif ()

target_link_libraries(GameH3DMP EntitiesH3DMP)

target_compile_definitions(GameH3DMP PUBLIC ENGINE_API=)
target_compile_definitions(GameH3DMP PUBLIC PLATFORM_UNIX)
target_compile_definitions(GameH3DMP PUBLIC USE_PORTABLE_C)
