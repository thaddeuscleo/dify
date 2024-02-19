import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import BasePanel from '../_base/panel'
import useInput from './use-input'
import { mockLLMNodeData } from './mock'
import Field from '@/app/components/workflow/nodes/_base/components/field'
import AddButton from '@/app/components/base/button/add-button'
import Split from '@/app/components/workflow/nodes/_base/components/split'
import ModelParameterModal from '@/app/components/header/account-setting/model-provider-page/model-parameter-modal'

import Switch from '@/app/components/base/switch'
const i18nPrefix = 'workflow.nodes.llm'

const Panel: FC = () => {
  const { t } = useTranslation()
  const {
    inputs,
    handleModelChanged,
    toggleContextEnabled,
    handleCompletionParamsChange,
  } = useInput(mockLLMNodeData)
  const model = inputs.model
  const modelMode = inputs.model?.mode
  const isChatMode = modelMode === 'chat'

  const handleAddVariable = () => {
    console.log('add variable')
  }
  return (
    <BasePanel
      inputsElement={
        <div className='mt-2 px-4 space-y-4'>
          <Field
            title={t(`${i18nPrefix}.model`)}
          >
            <ModelParameterModal
              popupClassName='!w-[387px]'
              isAdvancedMode={true}
              mode={model?.mode}
              provider={model?.provider}
              completionParams={model.completion_params}
              modelId={model.name}
              setModel={handleModelChanged}
              onCompletionParamsChange={handleCompletionParamsChange}
              hideDebugWithMultipleModel
              debugWithMultipleModel={false}
            />
          </Field>

          <Field
            title={t(`${i18nPrefix}.variables`)}
            operations={
              <AddButton onClick={handleAddVariable} />
            }
          >
            Var Selector
          </Field>

          <Field
            title={t(`${i18nPrefix}.context`)}
            operations={
              <Switch
                defaultValue={inputs.context.enabled}
                onChange={toggleContextEnabled}
                size='md'
              />
            }
          >
            {inputs.context.enabled
              ? (
                <div>Context</div>
              )
              : null}
          </Field>
          <Field
            title={t(`${i18nPrefix}.prompt`)}
          >
            Prompt
          </Field>
          <Split />
          <Field
            title={t(`${i18nPrefix}.vision`)}
            inline
          >
            Vision
          </Field>
          {/* This version not support function */}
          {/* <Field
            title={t(`${i18nPrefix}.fu`)}
            inline
          >
            Functions
          </Field> */}
        </div>
      }
      outputsElement={<div>start panel outputs</div>}
    />
  )
}

export default Panel
