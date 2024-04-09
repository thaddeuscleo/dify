const translation = {
  pageTitle: {
    line1: 'PROMPT',
    line2: 'Engineering',
  },
  orchestrate: 'Orchestrate',
  promptMode: {
    simple: 'Chuyển sang Chế độ Chuyên gia để chỉnh sửa toàn bộ PROMPT',
    advanced: 'Chế độ Chuyên gia',
    switchBack: 'Chuyển về',
    advancedWarning: {
      title: 'Bạn đã chuyển sang Chế độ Chuyên gia, và một khi bạn sửa đổi PROMPT, bạn KHÔNG THỂ quay lại chế độ cơ bản.',
      description: 'Trong Chế độ Chuyên gia, bạn có thể chỉnh sửa toàn bộ PROMPT.',
      learnMore: 'Tìm hiểu thêm',
      ok: 'OK',
    },
    operation: {
      addMessage: 'Thêm Tin nhắn',
    },
    contextMissing: 'Thiếu thành phần Ngữ cảnh, hiệu quả của prompt có thể không tốt.',
  },
  operation: {
    applyConfig: 'Xuất bản',
    resetConfig: 'Đặt lại',
    debugConfig: 'Gỡ lỗi',
    addFeature: 'Thêm Tính năng',
    automatic: 'Tự động',
    stopResponding: 'Dừng phản hồi',
    agree: 'thích',
    disagree: 'không thích',
    cancelAgree: 'Hủy thích',
    cancelDisagree: 'Hủy không thích',
    userAction: 'Người dùng ',
  },
  notSetAPIKey: {
    title: 'Khóa nhà cung cấp LLM chưa được đặt',
    trailFinished: 'Kết thúc dấu vết',
    description: 'Khóa nhà cung cấp LLM chưa được đặt, và cần được đặt trước khi gỡ lỗi.',
    settingBtn: 'Đi đến cài đặt',
  },
  trailUseGPT4Info: {
    title: 'Hiện không hỗ trợ gpt-4',
    description: 'Sử dụng gpt-4, vui lòng đặt API Key.',
  },
  feature: {
    groupChat: {
      title: 'Nâng cao trò chuyện',
      description: 'Thêm cài đặt trước cuộc trò chuyện cho ứng dụng có thể cải thiện trải nghiệm người dùng.',
    },
    groupExperience: {
      title: 'Nâng cao trải nghiệm',
    },
    conversationOpener: {
      title: 'Khởi động cuộc trò chuyện',
      description: 'Trong một ứng dụng trò chuyện, câu nói đầu tiên mà AI tự động nói với người dùng thường được sử dụng như một lời chào.',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'Theo dõi',
      description: 'Thiết lập đề xuất câu hỏi tiếp theo có thể mang lại trò chuyện tốt hơn cho người dùng.',
      resDes: '3 đề xuất cho câu hỏi tiếp theo của người dùng.',
      tryToAsk: 'Thử hỏi',
    },
    moreLikeThis: {
      title: 'Nhiều hơn như vậy',
      description: 'Tạo nhiều văn bản cùng một lúc, và sau đó chỉnh sửa và tiếp tục tạo ra.',
      generateNumTip: 'Số lượng mỗi lần tạo ra',
      tip: 'Sử dụng tính năng này sẽ tốn thêm token.',
    },
    speechToText: {
      title: 'Chuyển đổi Giọng nói thành Văn bản',
      description: 'Một khi được bật, bạn có thể sử dụng đầu vào giọng nói.',
      resDes: 'Đầu vào Giọng nói đã được bật',
    },
    textToSpeech: {
      title: 'Chuyển đổi Văn bản thành Giọng nói',
      description: 'Một khi được bật, văn bản có thể được chuyển đổi thành giọng nói.',
      resDes: 'Chuyển đổi Văn bản thành Âm thanh đã được bật',
    },
    citation: {
      title: 'Trích dẫn và Ghi chú',
      description: 'Một khi được bật, hiển thị tài liệu nguồn và phần được ghi nhận của nội dung được tạo ra.',
      resDes: 'Trích dẫn và Ghi chú đã được bật',
    },
    annotation: {
      title: 'Phản hồi Chú thích',
      description: 'Bạn có thể thêm phản hồi chất lượng cao vào bộ nhớ cache để ưu tiên phù hợp với các câu hỏi của người dùng tương tự.',
      resDes: 'Phản hồi Chú thích đã được bật',
      scoreThreshold: {
        title: 'Ngưỡng Điểm',
        description: 'Được sử dụng để đặt ngưỡng tương đồng cho phản hồi chú thích.',
        easyMatch: 'Tương đồng Dễ dàng',
        accurateMatch: 'Tương đồng Chính xác',
      },
      matchVariable: {
        title: 'Biến Phù hợp',
        choosePlaceholder: 'Chọn biến phù hợp',
      },
      cacheManagement: 'Chú thích',
      cached: 'Đã ghi chú',
      remove: 'Xóa',
      removeConfirm: 'Xóa chú thích này?',
      add: 'Thêm chú thích',
      edit: 'Chỉnh sửa chú thích',
    },
    dataSet: {
      title: 'Ngữ cảnh',
      noData: 'Bạn có thể nhập Dữ liệu như là ngữ cảnh',
      words: 'Từ',
      textBlocks: 'Khối Văn bản',
      selectTitle: 'Chọn Kiến thức tham khảo',
      selected: 'Kiến thức đã chọn',
      noDataSet: 'Không tìm thấy Kiến thức',
      toCreate: 'Đi tới tạo mới',
      notSupportSelectMulti: 'Hiện chỉ hỗ trợ một Kiến thức',
      queryVariable: {
        title: 'Biến Truy vấn',
        tip: 'Biến này sẽ được sử dụng làm đầu vào truy vấn cho việc truy xuất ngữ cảnh, lấy thông tin ngữ cảnh liên quan đến đầu vào của biến này.',
        choosePlaceholder: 'Chọn biến truy vấn',
        noVar: 'Không có biến',
        noVarTip: 'xin vui lòng tạo một biến dưới phần Biến',
        unableToQueryDataSet: 'Không thể truy vấn Kiến thức',
        unableToQueryDataSetTip: 'Không thể truy vấn Kiến thức thành công, vui lòng chọn một biến truy vấn ngữ cảnh trong phần ngữ cảnh.',
        ok: 'OK',
        contextVarNotEmpty: 'biến truy vấn ngữ cảnh không thể trống',
        deleteContextVarTitle: 'Xóa biến “{{varName}}”?',
        deleteContextVarTip: 'Biến này đã được thiết lập là biến truy vấn ngữ cảnh, và việc loại bỏ nó sẽ ảnh hưởng đến việc sử dụng bình thường của Kiến thức. Nếu bạn vẫn cần xóa nó, vui lòng chọn lại nó trong phần ngữ cảnh.',
      },
    },
    tools: {
      title: 'Công cụ',
      tips: 'Công cụ cung cấp một phương thức gọi API chuẩn, lấy đầu vào người dùng hoặc biến làm tham số yêu cầu để truy vấn dữ liệu bên ngoài như ngữ cảnh.',
      toolsInUse: '{{count}} công cụ đang được sử dụng',
      modal: {
        title: 'Công cụ',
        toolType: {
          title: 'Loại Công cụ',
          placeholder: 'Vui lòng chọn loại công cụ',
        },
        name: {
          title: 'Tên',
          placeholder: 'Vui lòng nhập tên',
        },
        variableName: {
          title: 'Tên Biến',
          placeholder: 'Vui lòng nhập tên biến',
        },
      },
    },
    conversationHistory: {
      title: 'Lịch sử Cuộc trò chuyện',
      description: 'Đặt tên tiền tố cho các vai trò trong cuộc trò chuyện',
      tip: 'Lịch sử Cuộc trò chuyện chưa được bật, vui lòng thêm <histories> vào phần prompt ở trên.',
      learnMore: 'Tìm hiểu thêm',
      editModal: {
        title: 'Chỉnh sửa Tên Vai trò Cuộc trò chuyện',
        userPrefix: 'Tiền tố Người dùng',
        assistantPrefix: 'Tiền tố Trợ lý',
      },
    },
    toolbox: {
      title: 'HỘP CÔNG CỤ',
    },
    moderation: {
      title: 'Kiểm duyệt nội dung',
      description: 'Bảo vệ đầu ra của mô hình bằng cách sử dụng API kiểm duyệt hoặc duy trì một danh sách từ nhạy cảm.',
      allEnabled: 'Nội dung ĐẦU VÀO/ĐẦU RA Đã Bật',
      inputEnabled: 'Nội dung ĐẦU VÀO Đã Bật',
      outputEnabled: 'Nội dung ĐẦU RA Đã Bật',
      modal: {
        title: 'Cài đặt kiểm duyệt nội dung',
        provider: {
          title: 'Nhà cung cấp',
          openai: 'Kiểm duyệt OpenAI',
          openaiTip: {
            prefix: 'Kiểm duyệt OpenAI yêu cầu một khóa API OpenAI được cấu hình trong ',
            suffix: '.',
          },
          keywords: 'Từ khóa',
        },
        keywords: {
          tip: 'Mỗi dòng một từ khóa, phân tách bằng các dòng. Tối đa 100 ký tự mỗi dòng.',
          placeholder: 'Mỗi dòng một từ khóa, phân tách bằng các dòng',
          line: 'Dòng',
        },
        content: {
          input: 'Kiểm duyệt Nội dung ĐẦU VÀO',
          output: 'Kiểm duyệt Nội dung ĐẦU RA',
          preset: 'Câu trả lời mẫu',
          placeholder: 'Nội dung câu trả lời mẫu ở đây',
          condition: 'Đã bật ít nhất một kiểm duyệt nội dung ĐẦU VÀO và ĐẦU RA',
          fromApi: 'Câu trả lời mẫu được trả về bởi API',
          errorMessage: 'Câu trả lời mẫu không thể trống',
          supportMarkdown: 'Hỗ trợ Markdown',
        },
        openaiNotConfig: {
          before: 'Kiểm duyệt OpenAI yêu cầu một khóa API OpenAI được cấu hình trong',
          after: '',
        },
      },
    },
  },
  automatic: {
    title: 'Tự động hóa triển khai ứng dụng',
    description: 'Mô tả tình huống của bạn, Dify sẽ tự động hóa một ứng dụng cho bạn.',
    intendedAudience: 'Ai là đối tượng mục tiêu?',
    intendedAudiencePlaceHolder: 'ví dụ: Sinh viên',
    solveProblem: 'Họ hy vọng AI có thể giải quyết vấn đề gì cho họ?',
    solveProblemPlaceHolder: 'ví dụ: Đánh giá thành tích học tập',
    generate: 'Tạo ra',
    audiencesRequired: 'Yêu cầu Đối tượng mục tiêu',
    problemRequired: 'Vấn đề cần thiết',
    resTitle: 'Chúng tôi đã tự động hóa ứng dụng sau đây cho bạn.',
    apply: 'Áp dụng tự động hóa này',
    noData: 'Mô tả tình huống sử dụng của bạn ở bên trái, xem trước tự động hóa sẽ hiển thị ở đây.',
    loading: 'Tự động hóa ứng dụng cho bạn...',
    overwriteTitle: 'Ghi đè cấu hình hiện tại?',
    overwriteMessage: 'Áp dụng tự động hóa này sẽ ghi đè lên cấu hình hiện tại.',
  },
  resetConfig: {
    title: 'Xác nhận đặt lại?',
    message:
      'Đặt lại sẽ loại bỏ các thay đổi, khôi phục cấu hình đã xuất bản lần cuối.',
  },
  errorMessage: {
    nameOfKeyRequired: 'tên của khóa: {{key}} được yêu cầu',
    valueOfVarRequired: 'giá trị {{key}} không thể trống',
    queryRequired: 'Văn bản yêu cầu được yêu cầu.',
    waitForResponse:
      'Vui lòng đợi phản hồi của tin nhắn trước để hoàn thành.',
    waitForBatchResponse:
      'Vui lòng đợi phản hồi của tác vụ hàng loạt để hoàn thành.',
    notSelectModel: 'Vui lòng chọn một mô hình',
    waitForImgUpload: 'Vui lòng đợi hình ảnh được tải lên',
  },
  chatSubTitle: 'Hướng dẫn',
  completionSubTitle: 'Tiền Tố Lời Nhắc',
  promptTip:
    'Lời nhắc hướng dẫn các phản hồi của AI với hướng dẫn và ràng buộc. Chèn biến như {{input}}. Lời nhắc này sẽ không được hiển thị cho người dùng.',
  formattingChangedTitle: 'Định dạng đã thay đổi',
  formattingChangedText:
    'Thay đổi định dạng sẽ đặt lại khu vực gỡ lỗi, bạn có chắc chắn không?',
  variableTitle: 'Biến',
  variableTip:
    'Người dùng điền các biến vào một biểu mẫu, tự động thay thế các biến trong lời nhắc.',
  notSetVar: 'Biến cho phép người dùng giới thiệu các từ khóa lời nhắc hoặc mở đầu khi điền vào biểu mẫu. Bạn có thể thử nhập "{{input}}" trong các từ khóa lời nhắc.',
  autoAddVar: 'Biến không xác định được tham chiếu trong tiền-lời nhắc, bạn có muốn thêm chúng vào biểu mẫu đầu vào người dùng không?',
  variableTable: {
    key: 'Khóa Biến',
    name: 'Tên Trường Nhập Liệu Người Dùng',
    optional: 'Tùy chọn',
    type: 'Loại Nhập Liệu',
    action: 'Hành động',
    typeString: 'Chuỗi',
    typeSelect: 'Chọn',
  },
  varKeyError: {
    canNoBeEmpty: 'Khóa biến không thể trống',
    tooLong: 'Khóa biến: {{key}} quá dài. Không thể dài hơn 30 ký tự',
    notValid: 'Khóa biến: {{key}} không hợp lệ. Chỉ có thể chứa chữ cái, số, và dấu gạch dưới',
    notStartWithNumber: 'Khóa biến: {{key}} không thể bắt đầu bằng số',
    keyAlreadyExists: 'Khóa biến: :{{key}} đã tồn tại',
  },
  otherError: {
    promptNoBeEmpty: 'Lời nhắc không thể trống',
    historyNoBeEmpty: 'Lịch sử cuộc trò chuyện phải được thiết lập trong lời nhắc',
    queryNoBeEmpty: 'Truy vấn phải được thiết lập trong lời nhắc',
  },
  variableConig: {
    'addModalTitle': 'Thêm Trường Nhập',
    'editModalTitle': 'Chỉnh Sửa Trường Nhập',
    'description': 'Cài đặt cho biến {{varName}}',
    'fieldType': 'Loại Trường',
    'string': 'Văn bản ngắn',
    'text-input': 'Văn bản ngắn',
    'paragraph': 'Đoạn văn',
    'select': 'Chọn',
    'number': 'Số',
    'notSet': 'Không thiết lập, hãy thử nhập {{input}} trong gợi ý tiền tố',
    'stringTitle': 'Tùy chọn hộp văn bản biểu mẫu',
    'maxLength': 'Độ dài tối đa',
    'options': 'Tùy chọn',
    'addOption': 'Thêm tùy chọn',
    'apiBasedVar': 'Biến Dựa trên API',
    'varName': 'Tên Biến',
    'labelName': 'Tên Nhãn',
    'inputPlaceholder': 'Vui lòng nhập',
    'required': 'Bắt buộc',
    'errorMsg': {
      varNameRequired: 'Tên biến là bắt buộc',
      labelNameRequired: 'Tên nhãn là bắt buộc',
      varNameCanBeRepeat: 'Tên biến không được lặp lại',
      atLeastOneOption: 'Ít nhất một tùy chọn là bắt buộc',
      optionRepeat: 'Có các tùy chọn trùng lặp',
    },
  },
  vision: {
    name: 'Tầm nhìn',
    description: 'Cho phép tầm nhìn sẽ cho phép mô hình nhận hình ảnh và trả lời các câu hỏi về chúng.',
    settings: 'Cài đặt',
    visionSettings: {
      title: 'Cài đặt Tầm nhìn',
      resolution: 'Độ phân giải',
      resolutionTooltip: `Độ phân giải thấp sẽ cho phép mô hình nhận một phiên bản hình ảnh 512 x 512 thấp hơn, và đại diện cho hình ảnh với ngân sách 65 token. Điều này cho phép API trả về phản hồi nhanh hơn và tiêu thụ ít token đầu vào cho các trường hợp sử dụng không yêu cầu chi tiết cao.
      \n
      độ phân giải cao sẽ đầu tiên cho phép mô hình nhìn thấy hình ảnh thấp hơn và sau đó tạo ra các cắt chi tiết của hình ảnh đầu vào dưới dạng hình vuông 512px dựa trên kích thước hình ảnh đầu vào. Mỗi cắt chi tiết sử dụng hai lần ngân sách token cho tổng cộng 129 token.`,
      high: 'Cao',
      low: 'Thấp',
      uploadMethod: 'Phương thức Tải lên',
      both: 'Cả hai',
      localUpload: 'Tải lên Nội bộ',
      url: 'URL',
      uploadLimit: 'Giới hạn Tải lên',
    },
  },
  voice: {
    name: 'Giọng nói',
    defaultDisplay: 'Giọng mặc định',
    description: 'Cài đặt giọng nói văn bản thành tiếng',
    settings: 'Cài đặt',
    voiceSettings: {
      title: 'Cài đặt Giọng nói',
      language: 'Ngôn ngữ',
      resolutionTooltip: 'Giọng nói văn bản hỗ trợ ngôn ngữ。',
      voice: 'Giọng',
    },
  },
  openingStatement: {
    title: 'Mở đầu Trò chuyện',
    add: 'Thêm',
    writeOpner: 'Viết câu mở đầu',
    placeholder: 'Viết thông điệp mở đầu của bạn ở đây, bạn có thể sử dụng biến, hãy thử nhập {{biến}}.',
    openingQuestion: 'Câu Hỏi Mở đầu',
    noDataPlaceHolder:
      'Bắt đầu cuộc trò chuyện với người dùng có thể giúp AI thiết lập một mối quan hệ gần gũi hơn với họ trong các ứng dụng trò chuyện.',
    varTip: 'Bạn có thể sử dụng biến, hãy thử nhập {{biến}}',
    tooShort: 'Ít nhất 20 từ của lời nhắc ban đầu được yêu cầu để tạo ra các lời nhận đầu tiên cho cuộc trò chuyện.',
    notIncludeKey: 'Lời nhắc ban đầu không bao gồm biến: {{khóa}}. Vui lòng thêm nó vào lời nhắc ban đầu.',
  },
  modelConfig: {
    model: 'Mô hình',
    setTone: 'Thiết lập tông của phản hồi',
    title: 'Mô hình và Tham số',
    modeType: {
      chat: 'Trò chuyện',
      completion: 'Hoàn thành',
    },
  },
  inputs: {
    title: 'Gỡ Lỗi và Xem Trước',
    noPrompt: 'Hãy thử viết một số lời nhắc trong trường tiền-lời nhắc',
    userInputField: 'Trường Nhập Liệu Người Dùng',
    noVar: 'Điền vào giá trị của biến, nó sẽ tự động thay thế từ khóa lời nhắc mỗi khi bắt đầu phiên mới.',
    chatVarTip:
      'Điền vào giá trị của biến, nó sẽ tự động thay thế từ khóa lời nhắc mỗi khi bắt đầu phiên mới',
    completionVarTip:
      'Điền vào giá trị của biến, nó sẽ tự động thay thế từ khóa lời nhắc mỗi khi một câu hỏi được gửi.',
    previewTitle: 'Xem Trước Lời Nhắc',
    queryTitle: 'Nội dung Truy vấn',
    queryPlaceholder: 'Vui lòng nhập văn bản yêu cầu.',
    run: 'CHẠY',
  },
  result: 'Văn bản Đầu Ra',
  datasetConfig: {
    settingTitle: 'Cài đặt Truy xuất',
    knowledgeTip: 'Nhấn vào nút “+” để thêm kiến thức',
    retrieveOneWay: {
      title: 'N-to-1 Truy xuất',
      description: 'Dựa trên ý định của người dùng và mô tả Kiến thức, Agent tự động chọn Kiến thức tốt nhất để truy vấn. Tốt nhất cho các ứng dụng có Kiến thức cụ thể, giới hạn.',
    },
    retrieveMultiWay: {
      title: 'Truy xuất đa hướng',
      description: 'Dựa trên ý định của người dùng, truy vấn qua tất cả Kiến thức, truy xuất văn bản liên quan từ nhiều nguồn và chọn ra kết quả tốt nhất phù hợp với truy vấn của người dùng sau khi sắp xếp lại. Yêu cầu cấu hình của API Rerank model.',
    },
    rerankModelRequired: 'Rerank model là bắt buộc',
    params: 'Tham số',
    top_k: 'Top K',
    top_kTip: 'Sử dụng để lọc các phần chính xác nhất với các câu hỏi của người dùng. Hệ thống cũng sẽ tự động điều chỉnh giá trị của Top K, theo max_tokens của mô hình đã chọn.',
    score_threshold: 'Ngưỡng Điểm',
    score_thresholdTip: 'Sử dụng để thiết lập ngưỡng tương đồng cho việc lọc các phần.',
    retrieveChangeTip: 'Thay đổi chế độ chỉ mục và chế độ truy xuất có thể ảnh hưởng đến các ứng dụng liên quan đến Kiến thức này.',
  },
  debugAsSingleModel: 'Gỡ Lỗi như Một Mô hình',
  debugAsMultipleModel: 'Gỡ Lỗi như Nhiều Mô hình',
  duplicateModel: 'Sao chép',
  publishAs: 'Xuất bản dưới dạng',
  assistantType: {
    name: 'Loại Trợ lý',
    chatAssistant: {
      name: 'Trợ lý Cơ bản',
      description: 'Xây dựng một trợ lý dựa trên trò chuyện sử dụng một Mô hình Ngôn ngữ Lớn.',
    },
    agentAssistant: {
      name: 'Trợ lý Tác nhân',
      description: 'Xây dựng một Tác nhân thông minh có thể tự động chọn các công cụ để hoàn thành các nhiệm vụ.',
    },
  },
  agent: {
    agentMode: 'Chế độ Tác nhân',
    agentModeDes: 'Thiết lập loại chế độ suy luận cho tác nhân',
    agentModeType: {
      ReACT: 'ReAct',
      functionCall: 'Gọi Hàm',
    },
    setting: {
      name: 'Thiết lập Tác nhân',
      description: 'Thiết lập Tác nhân cho phép thiết lập chế độ tác nhân và các tính năng nâng cao như các lời nhắc tích hợp sẵn, chỉ có sẵn trong loại Tác nhân.',
      maximumIterations: {
        name: 'Số Lần Lặp Tối đa',
        description: 'Giới hạn số lần lặp một trợ lý tác nhân có thể thực hiện',
      },
    },
    buildInPrompt: 'Lời Nhắc Tích Hợp',
    firstPrompt: 'Tiền-lời Nhắc Đầu Tiên',
    nextIteration: 'Lần Lặp Tiếp Theo',
    promptPlaceholder: 'Viết tiền-lời nhắc của bạn ở đây',
    tools: {
      name: 'Công cụ',
      description: 'Sử dụng công cụ có thể mở rộng các khả năng của LLM, như tìm kiếm trên internet hoặc thực hiện các phép tính khoa học',
      enabled: 'Đã kích hoạt',
    },
  },
}

export default translation
