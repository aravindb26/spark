import type { FC } from 'react'

import { ProgressTracker as Root, type ProgressTrackerProps } from './ProgressTracker'
import { ProgressTrackerStep as Step, type ProgressTrackerStepProps } from './ProgressTrackerStep'
import { ProgressTrackerStepIndicator as StepIndicator } from './ProgressTrackerStepIndicator'
import { ProgressTrackerStepLabel as StepLabel } from './ProgressTrackerStepLabel'

export const ProgressTracker: FC<ProgressTrackerProps> & {
  Step: typeof Step
  StepLabel: typeof StepLabel
  StepIndicator: typeof StepIndicator
} = Object.assign(Root, {
  Step,
  StepLabel,
  StepIndicator,
})

ProgressTracker.displayName = 'ProgressTracker'
Step.displayName = 'ProgressTracker.Step'
StepLabel.displayName = 'ProgressTracker.StepLabel'
StepIndicator.displayName = 'ProgressTracker.StepIndicator'

export type { ProgressTrackerProps, ProgressTrackerStepProps }
