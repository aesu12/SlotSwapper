const getPlayerController = () => Client.getMinecraft().field_71442_b


register("guiMouseClick", (_, __, mbtn, gui, event) => {
  if (mbtn !== 0 || !(gui instanceof net.minecraft.client.gui.inventory.GuiInventory)) return

  const slot = gui.getSlotUnderMouse()?.field_75222_d

  const container = Player.getContainer()

  // 0 - 4 crafting slots
  if (!slot || slot < 5) return

  if (Keyboard.isKeyDown(Keyboard.KEY_LSHIFT) && slot >= 27 && slot <= 34)
    {
      cancel(event)
      getPlayerController().func_78753_a(
        container.getWindowId(),
        slot,
        slot-27,
        2,
        Player.getPlayer()
      )
      return
  }
}).setFps(1)


