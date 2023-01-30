import React, { useRef, useEffect, useState } from 'react'
import { DEG2RAD, useWorld, useSignal, useFields, useSyncState } from 'hyperfy'

const OPEN_CLOSE_SPEED = 5

export default function Cairn() {
  return (
    <app>
      <rigidbody type="kinematic">
        <model src="rock.glb" onClick={() => console.log("rock clicked")} />
      </rigidbody>
    </app>
  )
}